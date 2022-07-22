import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function SearchBar({ setSubmitValue, city, setWeatherData }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    function handleResponse(response) {
      setWeatherData({
        ready: true,
        coord: response.data.coord,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        date: response.data.dt * 1000,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
        country: response.data.sys.country,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        pressure: response.data.main.pressure,
        clouds: response.data.clouds.all,
        visibility: response.data.visibility,
        mintemp: Math.round(response.data.main.temp_min),
        maxtemp: Math.round(response.data.main.temp_max),
      });
    }

    const handleCityQuery = async () => {
      const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
      let units = "metric";
      let finalCity;

      // openweather uses wrong country codes if you search just these cities
      if ((city === "venice") | (city === "italy")) {
        finalCity = city.concat(", IT");
      } else if (city === "france") {
        finalCity = city.concat(", FR");
      } else if (city === "poland") {
        finalCity = city.concat(", PL");
      } else {
        finalCity = city;
      }
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${finalCity}&appid=${apiKey}&units=${units}`;

      const response = await axios.get(apiUrl);
      handleResponse(response);
    };

    handleCityQuery(city);
  }, [city, setWeatherData]);

  function handleInput(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitValue(inputValue);
    setInputValue("");
  }

  return (
    <StyledSearchBar>
      <div className="search-bar-container">
        <form onSubmit={handleSubmit} className="search-bar-form">
          <input
            type="text"
            onChange={handleInput}
            value={inputValue}
            placeholder="Visit your favorite place!"
          />
          <button type="submit"> Search </button>
        </form>
      </div>
    </StyledSearchBar>
  );
}

export default SearchBar;

const StyledSearchBar = styled.div`
  .search-bar-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
  form {
    text-align: center;
    margin: 20px 0;
    transition: opacity 0.3s ease;
    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  form:hover {
    opacity: 1;
  }

  input {
    width: 100%;
    margin: 0;
    border-radius: 4px;
    padding: 11px 15px;
    border: none;
    outline: none;
    font-family: "Quicksand", sans-serif;
    box-shadow: 0px 3px 10px #212121;
    @media (min-width: 769px) and (max-width: 1024px) {
      width: 80%;
      font-size: 0.7rem;
    }
  }

  button {
    margin: 0;
    width: 80%;
    border-radius: 4px;
    border: none;
    padding: 11px 10px;
    margin-top: -2px;
    outline: none;
    box-shadow: 0px 3px 10px #212121;
    transition: all 0.2s ease;
    cursor: pointer;
    background-color: rgb(235, 235, 235);
    color: #212121;
    font-weight: 700;
    font-family: "Quicksand", sans-serif;
    @media (min-width: 769px) and (max-width: 1024px) {
      width: 70%;
    }
  }

  button:hover {
    background-color: #3ab4f2;
    color: #ffffff;

    transition: all 0.3s ease;
  }
`;
