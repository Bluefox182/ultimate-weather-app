import React from "react";
import styled from "styled-components";

import sunrise from "../assets/img/sunrise.png";
import sunset from "../assets/img/sunset.png";
import humidity from "../assets/img/humidity.png";
import visibility from "../assets/img/visibility.png";
import wind from "../assets/img/wind.png";
import clouds from "../assets/img/clouds.png";
import mintemp from "../assets/img/mintemp.png";
import maxtemp from "../assets/img/maxtemp.png";
import pressure from "../assets/img/pressure.png";

function DayDetails({ weatherData }) {
  return (
    <StyledDayDetails>
      <h2>Today</h2>
      <div className="Cards-Container">
        <div className="Card">
          <div className="Card__Details">
            <div className="Card__Stats">
              <img src={humidity} alt="humidity" />
              <p>{weatherData.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="Card__Stats">
              <img src={wind} alt="wind speed" />
              <p>{weatherData.wind} Km/h</p>
              <p>Wind</p>
            </div>
            <div className="Card__Stats">
              <img src={sunrise} alt="sunrise" />
              <p>
                {new Date(weatherData.sunrise * 1000).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
              <p>Sunrise</p>
            </div>
            <div className="Card__Stats">
              <img src={sunset} alt="sunset" />
              <p>
                {new Date(weatherData.sunset * 1000).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
              <p>Sunset</p>
            </div>
            <div className="Card__Stats">
              <img src={pressure} alt="pressure" />
              <p>{weatherData.pressure}hPa</p>
              <p>Pressure</p>
            </div>
            <div className="Card__Stats">
              <img src={clouds} alt="clouds" />
              <p>{weatherData.clouds}%</p>
              <p>Clouds</p>
            </div>
            <div className="Card__Stats">
              <img src={visibility} alt="visibility" />
              <p>{weatherData.visibility / 1000}km</p>
              <p>Visibility</p>
            </div>
            <div className="Card__Stats">
              <img src={mintemp} alt="mintemp" />
              <p>{weatherData.mintemp}°</p>
              <p>Min °</p>
            </div>
            <div className="Card__Stats">
              <img src={maxtemp} alt="maxtemp" />
              <p>{weatherData.maxtemp}°</p>
              <p>Max °</p>
            </div>
          </div>
        </div>
      </div>
    </StyledDayDetails>
  );
}

export default DayDetails;

const StyledDayDetails = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
  .Cards-Container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    gap: 80px;
    @media (max-width: 768px) {
      padding: 10px 0;
    }
  }

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
    }
  }

  .Card__Stats {
    text-align: center;
    text-shadow: 3px 2px 4px #000000;
    p {
      padding: 3px;
      font-size: 18px;
      color: #fcf8e8;
      @media (max-width: 768px) {
        font-size: 10px;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 14px;
      }
    }
    img {
      width: 80px;
      filter: drop-shadow(2px 2px 2px #222);
      padding: 2px;
      @media (max-width: 768px) {
        width: 30px;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
        width: 50px;
      }
    }
    @media (max-width: 768px) {
      overflow: hidden;
    }
  }
`;
