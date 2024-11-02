import { useState } from "react";
import "./App.css";
import CalendarComp from "./CalendarComponent/CalendarComp.jsx";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <div>
        <CalendarComp />
      </div>
    </>
  );
}

export default App;
