import { useState } from "react";
import Sidebar from "../sidebar_components/sidebar";
import Promptinput from "../PromptForm/Promptinput";
import CalendarComp from "../path_to_your_CalendarComp"; // Adjust this path

export const PromptPage = () => {
  // State to toggle calendar visibility
  const [showCalendar, setShowCalendar] = useState(false);

  // Toggle function for the calendar
  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-3/4 flex flex-col items-center justify-center max-w-3xl">
          <Promptinput />
          {/* Button to toggle calendar */}
          <button
            onClick={toggleCalendar}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            {showCalendar ? "Hide Calendar" : "Show Calendar"}
          </button>
          {/* Conditionally render the calendar */}
          {showCalendar && (
            <div className="mt-4 w-full">
              <CalendarComp />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptPage;
