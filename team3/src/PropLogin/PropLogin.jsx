import React from "react";
import axios from "axios";
import PropSignup from "./PropSignup";
import { useNavigate } from "react-router-dom";

const PropLogin = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [isErrorMessage, setErrorMessage] = React.useState("");
  const [isSuccessMessage, setSuccessMessage] = React.useState("");
  const [isSignedup, setSignedup] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Success')
    try {
      console.log('Success in try')
      console.log(username, password)
      const response = await axios.post("http://localhost:3001/api/proprietor/login", {
        username,
        password,
      }, {headers: {"Content-Type": "application/json"}});

      if (response.status === 200) {
        setSuccessMessage("Login successful!");
        navigate("/PromptPage");
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

      {!isSignedup && (
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center justify-center min-h-screen'
        >
          <h2 className='text-2xl font-semibold mb-8'>Login</h2>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Username'
            className='mb-4 p-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
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
  )}
  {isSignedup && <PropSignup />}

      <div className='flex flex-row items-center justify-center '>
        <h1> Don't have an account?</h1>
        <button
          onClick={() => setSignedup(!isSignedup)}
          className='bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white px-8 py-1 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 m-1'
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default PropLogin;
