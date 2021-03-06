import React from "react";

function Calendar() {
  return (
    <>
      <h4>Upcoming Workouts</h4>
      <iframe 
        title="workout calendar"  
        id="calendar"
        src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;src=Y185aHU4c2M0YzFubGM3N25va200a3ZpdTZpb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%239E69AF&amp;showNav=0&amp;showTitle=0&amp;showDate=1&amp;showPrint=0&amp;showCalendars=1&amp;mode=AGENDA" 
        style={{borderWidth:0}} 
        width="330" 
        height="230" 
        frameborder="0" 
        scrolling="no" 
      />
    </>
  );
}

export default Calendar;
