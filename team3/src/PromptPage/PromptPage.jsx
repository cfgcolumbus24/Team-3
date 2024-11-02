import { useState } from 'react';
import Sidebar from '../sidebar_components/sidebar';
import PromptInput from '../PromptForm/PromptInput';
import CalendarComp from '../calendarComp/CalendarComp.jsx'; 
import { ChevronDown, ChevronUp } from 'lucide-react';

export const PromptPage = () => {

  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(prev => !prev);
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-3/4 flex flex-col items-center justify-center max-w-3xl bg-white p-6 shadow-lg rounded-lg">
          <PromptInput />
          
          <button
            onClick={toggleCalendar}
            className="mt-6 p-3 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            {showCalendar ? "Hide Calendar" : "Show Calendar"}
            {showCalendar ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {showCalendar && (
            <div className="mt-6 w-full">
              <CalendarComp />
            </div>
          )}
      </div>
    </div>
    </div>
  );
};

export default PromptPage;
