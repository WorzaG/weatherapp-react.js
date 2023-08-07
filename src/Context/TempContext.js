import { createContext, useContext, useEffect, useState } from "react";

const TempContext = createContext();

export const TempProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("Ankara");
  //
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=tr&appid=e67d497cf7c05d1272ff5b06166be264&lng=tr`
    )
      .then((res) => res.json())
      .then((res) => {
        const weather = res.list.filter((item, index) => {
          let req = "12:00:00";
          let date = item.dt_txt;
          let res = date.split(" ");
          if (res[1].includes(req) == 1) {
            return item;
          }
        });
        setData(weather);
        // console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, [city]);

  const values = {
    data,
    setData,
    loading,
    city,
    setCity,
  };

  return <TempContext.Provider value={values}>{children}</TempContext.Provider>;
};

export const useTemp = () => useContext(TempContext);
