import React from "react";
import axios from "axios";

const PropSignup = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isErrorMessage, setErrorMessage] = React.useState("");
  const [isSuccessMessage, setSuccessMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/proprietor/create-account", {
        firstName,
        lastName,
        username,
        password,
      });

      if (response.status === 200) {
        setSuccessMessage("Registration successful!");
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
        <h2 className='text-2xl font-semibold mb-8'>Signup</h2>
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className='mb-4 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className='mb-4 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='mb-4 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mb-6 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />

        <button className='bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105'>
          Signup
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

export default PropSignup;
