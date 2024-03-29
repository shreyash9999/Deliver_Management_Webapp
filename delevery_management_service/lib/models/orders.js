const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  placedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isAccepted: {
    type: Boolean,
    default: false
  },
  acceptedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // Conditional validation using virtual property
    validate: {
      validator: function(v) {
        return this.isAccepted === true && v !== undefined;
      },
      message: props => `${props.value} is not a valid user ID for acceptedBy field. This field is required only when isAccepted is true.`
    }
  }
});

OrderSchema.query.findByPlacedBy = async function(userId) {
  return await this.find({ placedBy: userId });
};

OrderSchema.query.findByAcceptedBy = async function(userId) {
  return await this.find({ acceptedBy: userId, isAccepted: true });
};

const Order=mongoose.models.Order || mongoose.model('Order', OrderSchema);
module.exports =Order;
