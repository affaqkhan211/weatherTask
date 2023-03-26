import React, { useReducer, useContext } from "react";

import { WeatherReducer } from "./Reducer";

const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, {
    city: {
      city: "Abbottabad",
      lat: "34.1500",
      lng: "73.2167",
      country: "Pakistan",
      iso2: "PK",
      admin_name: "Khyber Pakhtunkhwa",
      capital: "minor",
      population: "148587",
      population_proper: "148587",
    },
    current: "",
    daily: "",
  });

  return (
    <WeatherAPPContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherAPPContext.Provider>
  );
};

export default WeatherAPPProvider;

export const UseWeatherAppContext = () => {
  return useContext(WeatherAPPContext);
};
