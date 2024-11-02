import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white-100">
      <img src="/opp_int.jpg" alt="Logo" className="absolute top-5 left-5 w-16 h-auto" />
      <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 font-mono">Opportunity International</h1>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          edu
        </button>
      </div>
    </div>
  );
}

export default App;