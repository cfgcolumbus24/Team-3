import {useEffect, useState} from 'react'
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import teacherData from '../Getteacher';



const CalendarComp = (props) => {
  const [events, setEvents] = useState();
  
  useEffect(() => {
    const fetchEvents = GetTeacher();
    setEvents(fetchEvents);
  });

  const config = {
    viewType: "Week",
  }
  return (
    <div>
      <DayPilotCalendar {...config}/>
    </div>
  )
}

export default CalendarComp
