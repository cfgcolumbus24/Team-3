import React from "react";
import axios from "axios";

const PropLogin = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [isErrorMessage, setErrorMessage] = React.useState("");
  const [isSuccessMessage, setSuccessMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        firstName,
        lastName,
        username,
      });

      if (response.status === 200) {
        setSuccessMessage("Login successful!");
        // Process response, e.g., save a token or redirect
        console.log(response.data);
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
      console.error("Error:", error);
    }
  };

  return (
    <div className='relative min-h-screen'>
      <img
        src='/opp_int.jpg'
        alt='Logo'
        className='absolute top-5 left-5 w-16 h-auto'
      />
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center min-h-screen'
      >
        <h2 className='text-2xl font-semibold mb-8'>Login</h2>
        <input
          type='text'
          placeholder='First Name'
          className='mb-4 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
        ></input>
        <input
          type='text'
          placeholder='Last Name'
          className='mb-4 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
        ></input>
        <input
          type='text'
          placeholder='Username'
          className='mb-4 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
        ></input>
        <input
          type='password'
          placeholder='Password'
          className='mb-6 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />

        <button className='bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105'>
          Login
        </button>
        {isErrorMessage && (
          <p className='text-red-500 mt-4'>{isErrorMessage}</p>
        )}
        {isSuccessMessage && (
          <p className='text-green-500 mt-4'>{isSuccessMessage}</p>
        )}
      </form>
    </div>
  );
};

export default PropLogin;
