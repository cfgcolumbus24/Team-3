import React from "react";
import Sidebar from "../sidebar_components/sidebar";
import Promptinput from "../PromptForm/Promptinput";
import CalendarComp from "../CalendarComponent/CalendarComp";


export const PromptPage = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  const handleCalendarClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };


  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-3/4 flex items-center justify-center max-w-3xl">
          <Promptinput />
          <button onClick={handleCalendarClick} className="flex ml-4  p-4 text-yellow relative ml-auto items-center justify-center gap-2 
            w-32 px-4 py-2 hover:bg-violet-200/90 hover:text-violet-900
            bg-white/90 border-tl-0
            border-2 border-violet-200 rounded-lg
            transition-colors duration-300
            disabled:opacity-50 disabled:cursor-not-allowed">Calendar</button>
        </div>
            {isCalendarOpen && (<CalendarComp/>)}
      </div>
    </div>
  )
}

export default PromptPage;
