import React from 'react';
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import { DayPilot } from "@daypilot/daypilot-lite-react";

const CalendarComp = () => {
  return (
    <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
      <DayPilotCalendar
        startDate={DayPilot.Date.today()}
        viewType="Week" 
        eventHeight={30}
        cellHeight={40}
        headerHeight={30}
        durationBarVisible={false}
        timeRangeSelectedHandling="Enabled"
        businessBeginsHour={8}
        businessEndsHour={18}
        showNonBusiness={false}
        heightSpec="Full"
        cssClassPrefix="daypilot"
      />
    </div>
  );
};

export default CalendarComp;
