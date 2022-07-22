import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";

function Day(forecastData) {
  const min = Math.round(forecastData.data.temp.min);
  const max = Math.round(forecastData.data.temp.max);
  const icon = forecastData.data.weather[0].icon;
  const date = dayjs(forecastData.data.dt * 1000).format("ddd");
  return (
    <StyledDay>
      <div
        className="day-forecast"
        style={{ display: "flex", flexDirection: "column", height: "auto" }}
      >
        <p>{date}</p>
        <WeatherIcon code={icon} size={150} />

        <p>
          {min}° | {max}°{" "}
        </p>
      </div>
    </StyledDay>
  );
}

export default Day;

const StyledDay = styled.div`
  .day-forecast {
    text-align: center;
    text-shadow: 3px 2px 4px #000000;
    p {
      padding: 3px;
      font-size: 18px;
      color: #ffffff;
    }
    img {
      width: 80px;
      filter: drop-shadow(2px 2px 2px #222);
      padding: 2px;
    }
  }

  .day-forecast > canvas {
    display: block;
    margin-top: 5px;
    padding: 5px;
    fill: #ffffff;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    border-radius: 50%;
    // opacity: 0.8;
  }
`;
