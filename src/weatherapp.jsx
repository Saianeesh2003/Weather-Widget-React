import Search from "./search";
import Info from "./info";
import { useState } from "react";
import "./weather.css";
function Weather() {
    let [weather, setWeather] = useState({
        city: "Delhi",
        temp: 25,
        tempMin: 23,
        tempMax: 27
    });
    
    
    const updateWeather = (newData) => {
        setWeather(newData);
    }
    
    return (
        <div>
            <Search updateWeather={updateWeather} /> 
            <Info info={weather} />
        </div>
    )
}

export default Weather;