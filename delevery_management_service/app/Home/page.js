import React from 'react';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-2">Order Food...</h1>
      <h2 className="text-4xl font-bold mb-2">Through Friends...</h2>
      <p className="text-xl mb-8">Keep it Simple!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Post Order</button>
    </div>
  );
}

export default HomePage;
