import React from 'react';

function Profile({ name, imageUrl, details, successRate }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={imageUrl} alt="Profile Image" className="profile-image rounded-circle" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          {Object.entries(details).map(([key, value]) => (
            <li key={key} className="list-group-item">
              <span className="detail-label">{key}:</span> {value}
            </li>
          ))}
        </ul>
        <div className="success-rate">
          <span className="success-label">Success Rate:</span> {successRate}
        </div>
      </div>
    </div>
  );
}

export default Profile;
