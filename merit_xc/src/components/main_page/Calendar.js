import React from "react";

function Calendar() {
  return (
    <div>
      <iframe
        id="calendar"
        src="https://calendar.google.com/calendar/embed?src=c_9hu8sc4c1nlc77nokm4kviu6io%40group.calendar.google.com&ctz=America%2FDenver"
        style={{ border: 0 }}
        width="799"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Calendar;
