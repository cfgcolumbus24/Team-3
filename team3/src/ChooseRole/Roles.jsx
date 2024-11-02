import React from 'react';
import { useNavigate } from 'react-router-dom';

const Roles = () => {
  const navigate = useNavigate();

  function handleClick(path){
    navigate(path);
  }

  return (
    <div className='relative min-h-screen'>
      <img src="/opp_int.jpg" alt="Logo" className="absolute top-5 left-5 w-16 h-auto" />

      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h2 className='text-2xl font-semibold mb-8'>You are a:</h2>

        <button 
          className='bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 mt-4'
          onClick={() => handleClick('/PromptPage')}
        >
          Teacher
        </button>
        <button 
          className='bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 mt-4'
          onClick={() => handleClick('/PropLogin')}
        >
          Proprietor
        </button>
      </div>
    </div>
  );
};

export default Roles;
