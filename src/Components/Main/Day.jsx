import React from "react";
export default function Day({ temp_max, temp_min, day, weather_status }) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(day).getDay();
  return (
    <div className="day_content">
      <div className="day_name">{dayNames[date]}</div>
      <div className="image">
        <img src="/images/weather/1.png" />
      </div>
      <div className="day_temps">
        <span>{Math.ceil(temp_max)}°</span>
      </div>
    </div>
  );
}
