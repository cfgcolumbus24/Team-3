import {useState} from 'react'
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react";


const CalendarComp = (props) => {
  const [events, setEvents] = useState();
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
