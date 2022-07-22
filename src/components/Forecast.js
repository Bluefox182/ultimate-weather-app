import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Day from "./Day";
import clouds from "../assets/img/clouds.png";

function Forecast({ weatherData, unit }) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&units=${unit}&appid=${apiKey}`;
      const response = await axios.get(apiUrl);
      setForecastData(response.data.daily);
      setLoaded(true);
      console.log(response.data.daily, "forecast");
    };
    getForecast();
  }, [weatherData, unit]);

  return (
    <StyledForecast>
      <h2>Week</h2>
      <div className="forecast">
        <div className="Card">
          <div className="Card__Details">
            {forecastData.map(function (day, index) {
              if (index < 5) {
                return <Day key={index} data={day} index={index} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </StyledForecast>
  );
}

export default Forecast;

const StyledForecast = styled.div`
  width: 100%;
  h2 {
    font-size: 2rem;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 0 30px;
    text-shadow: 0 0 2px #ffffff;
    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-left: 10px;
    }
  }

  .forecast {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    gap: 80px;
    @media (max-width: 768px) {
      padding: 10px 0;
    }
  }

  .Card {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .Card__Details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    margin: 0 10px;
    width: 100%;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    @media (max-width: 768px) {
      height: 120px;
      padding: 25px 0;
    }
  }
`;
