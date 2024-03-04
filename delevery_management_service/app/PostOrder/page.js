import React from 'react';
import Card from '../../components/Cards/Card';
import orderItems from '../../DATA/dummyData'; // Assuming data.js is in the same directory

function PostOrderPage() {
  const handleAccept = (item) => {
    // Handle order acceptance (e.g., display confirmation or redirect)
    console.log(`Order accepted: ${item.title}`);
    // You can redirect to a confirmation page or display a success message here.
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Post Order</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {orderItems.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} onAccept={() => handleAccept(item)} />
        ))}
      </div>
    </div>
  );
}

export default PostOrderPage;
