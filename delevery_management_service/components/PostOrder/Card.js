import React from 'react';

function Card({ title, description, onAccept }) {
  return (
    <div className="card shadow-md rounded overflow-hidden flex flex-col">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onAccept}
        >
          Accept
        </button>
      </div>
      <p className="px-4 py-2">{description}</p>
    </div>
  );
}

export default Card;