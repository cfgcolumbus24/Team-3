import React from 'react';

const PropLogin = () => {
  return (
    <div className='relative min-h-screen'>
      <img src="/opp_int.jpg" alt="Logo" className="absolute top-5 left-5 w-16 h-auto" />

      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h2 className='text-2xl font-semibold mb-8'>Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className='bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105'>
          Login
        </button>
      </div>
    </div>
  );
};

export default PropLogin;
