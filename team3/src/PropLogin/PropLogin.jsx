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
    try {
      const response = await axios.post(
        "http://localhost:3001/api/proprietor/login",
        {
          username,
          password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

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
    <div className="relative min-h-screen bg-white">
      <img
        src="/opp_int.jpg"
        alt="Logo"
        className="absolute top-8 left-8 w-16 h-auto shadow-lg rounded-md"
      />

      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        {!isSignedup ? (
          <div className="w-full max-w-md space-y-6">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg space-y-6"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
              
              <div className="space-y-4">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white py-3 rounded-lg hover:from-orange-500 hover:via-pink-700 hover:to-teal-500 transition-all transform hover:scale-102 font-medium">
                Login
              </button>

              {isErrorMessage && (
                <p className="text-red-500 text-center">{isErrorMessage}</p>
              )}
              {isSuccessMessage && (
                <p className="text-green-500 text-center">{isSuccessMessage}</p>
              )}
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600">Don't have an account?</p>
              <button
                onClick={() => setSignedup(true)}
                className="bg-gradient-to-r from-orange-400 via-pink-600 to-teal-400 text-white px-6 py-2 rounded-lg hover:from-orange-500 hover:via-pink-700 hover:to-teal-500 transition-all transform hover:scale-102 font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          <PropSignup />
        )}
      </div>
    </div>
  );
};

export default PropLogin;
