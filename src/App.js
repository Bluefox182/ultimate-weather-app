import React, { useState } from "react";
import styled from "styled-components";

import SearchBar from "./components/SearchBar";
import Background from "./components/Background";
import Info from "./components/Info";
import DayDetails from "./components/DayDetails";
import Description from "./components/Description";
import Forecast from "./components/Forecast";
import SocialIcons from "./components/SocialIcons";

function App() {
  const [submitValue, setSubmitValue] = useState("London");
  const [localTime, setLocalTime] = useState(null);
  const [weatherData, setWeatherData] = useState({
    ready: false,
    coord: { lon: "51.5085", lat: "-0.1257" },
  });
  const [unit, setUnit] = useState("Metric");

  return (
    <StyledApp className="App">
      <div className="Let-Container">
        <SearchBar
          setSubmitValue={setSubmitValue}
          city={submitValue}
          setWeatherData={setWeatherData}
        />
        <Info city={submitValue} weatherData={weatherData} setUnit={setUnit} />
        <Description
          localTime={localTime}
          setLocalTime={setLocalTime}
          weatherData={weatherData}
        />
      </div>
      <div className="Right-Container">
        <Forecast weatherData={weatherData} unit={unit} />
        <DayDetails weatherData={weatherData} />
      </div>
      <Background city={submitValue} />
      <SocialIcons />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Quicksand", sans-serif;
  // font-family: 'Raleway', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  .Let-Container {
    width: 20%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      gap: 15px;
      padding-top: 30px;
    }
  }

  .Right-Container {
    width: 80%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      padding-top: 30px;
      overflow: hidden;
    }
  }
`;
