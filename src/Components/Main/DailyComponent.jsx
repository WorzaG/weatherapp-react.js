import React from "react";
import { useTemp } from "../../Context/TempContext";
import Day from "./Day";
export default function DailyComponent() {
  const { data, setData, loading, city } = useTemp();

  return (
    <>
      <div className="table">
        <div className="city_name">{city}</div>
        <div className="days_table">
          {data.map((item, index) => (
            <Day
              temp_max={item.main.temp_max}
              temp_min={item.main.temp_min}
              day={item.dt_txt}
              weather_status={item.weather.main}
            />
          ))}
        </div>
      </div>
    </>
  );
}
