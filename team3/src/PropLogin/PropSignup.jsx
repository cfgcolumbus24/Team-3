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
        console.log(response.data);
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <img
        src="/opp_int.jpg"
        alt="Logo"
        className="absolute top-8 left-8 w-16 h-auto shadow-lg rounded-md"
      />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white py-3 rounded-lg hover:from-orange-500 hover:via-pink-700 hover:to-teal-500 transition-all transform hover:scale-102 font-medium">
            Sign Up
          </button>

          {isSuccessMessage && (
            <p className="text-green-500 text-center mt-4">{isSuccessMessage}</p>
          )}
          {isErrorMessage && (
            <p className="text-red-500 text-center mt-4">{isErrorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PropSignup;
