import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Info({ city, weatherData, setUnit }) {
  const [cityTemp, setCityTemp] = useState(weatherData.temperature);

  useEffect(() => {
    setCityTemp(weatherData.temperature);
  }, [weatherData]);

  const showFahrenheit = (e) => {
    e.preventDefault();
    setUnit("Imperial");
    setCityTemp(Math.round((weatherData.temperature * 9) / 5 + 32));
  };

  const showCelsius = (e) => {
    e.preventDefault();
    setUnit("Metric");
    setCityTemp(weatherData.temperature);
  };

  return (
    <StyledInfo>
      <div className="info">
        <p className="city">{city}</p>
        <div className="temp-container">
          <span className="temp">{cityTemp}</span>
          <span className="degrees">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            |
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    </StyledInfo>
  );
}

export default Info;

const StyledInfo = styled.div`
  .info {
    margin: 20px 0 0 0;
    color: white;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
      flex-direction: row;
      width: 100%;
      margin: 0;
    }
  }

  .city {
    text-transform: uppercase;
    font-weight: 800;
    font-family: "Raleway", sans-serif;
    letter-spacing: 7px;
    margin: 0;
    font-size: 1.5rem;
    text-shadow: 0 0 2px #ffffff;
  }

  .temp-container {
    text-align: center;
    padding-top: 15px;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  .temp {
    font-size: 100px;
    font-weight: 900;
    margin: -20px 0 0 0;
    text-shadow: 0 0 2px #ffffff;
    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
  .degrees {
    a {
      text-decoration: none;
      font-weight: bold;
      color: white;
      text-shadow: 0 0 2px #ffffff;
      &:hover {
        color: #1c6dd0;
        text-shadow: 0 0 2px #1c6dd0;
      }
    }
  }
`;
