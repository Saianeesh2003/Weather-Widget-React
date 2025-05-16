import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./search.css";
function Search({ updateWeather }) { // Accept the function as prop
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; // Changed to HTTPS
    const API_KEY = "5b1ee08094091c6d2c4b91f68017f3b2";
    let [city, setCity] = useState("");
    
    let weatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsrespone = await response.json();
            let result = {
                city: city,
                temp: jsrespone.main.temp,
                tempMin: jsrespone.main.temp_min,
                tempMax: jsrespone.main.temp_max,
            };
            updateWeather(result); // Call the function with the result
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    }
    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    
    let handleSubmit = (evt) => {
        evt.preventDefault();
        weatherInfo();
        setCity("");
    }
    
    return (
        <div className='main'>
            <form onSubmit={handleSubmit}> {/* Added onSubmit */}
                <TextField 
                    id="outlined-basic" 
                    label="City-Name" // Fixed typo
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange} 
                />
                <Button 
                    variant="text" 
                    type="submit"
                >
                    Search
                </Button>
            </form>
        </div>
    )
}

export default Search;