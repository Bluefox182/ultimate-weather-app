import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import styled from "styled-components";

import axios from "axios";
import description from "../assets/img/description.png";

function Description({ localTime, setLocalTime, date, weatherData }) {
  const [finalDay, setFinalDay] = useState(null);

  var utc = require("dayjs/plugin/utc");
  var timezone = require("dayjs/plugin/timezone"); // dependent on utc plugin
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const datetime = () => {
    const targetDate = new Date(); // Current date/time of user computer
    const timestamp =
      targetDate.getTime() / 1000 + targetDate.getTimezoneOffset() * 60; // Convert to UNIX timestamp

    var config = {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/timezone/json?location=${weatherData.coord.lat},${weatherData.coord.lon}&timestamp=${timestamp}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        if (response.data.timeZoneId != null) {
          const offsets =
            response.data.dstOffset * 1000 + response.data.rawOffset * 1000; // get DST and time zone offsets in milliseconds
          const localTime = new Date(timestamp * 1000 + offsets); // apply offsets to convert to local time
          const finalLocal = dayjs(localTime).format("HH:mm");

          const formatDate = (date) => {
            const d = dayjs(date).tz(response.data.timeZoneId);
            return d.format("dddd, MMMM DD YYYY");
          };

          setFinalDay(formatDate(date));
          setLocalTime(finalLocal);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  datetime();

  return (
    <StyledDescription>
      <div className="description">
        <div className="descContainer">
          <p className="item-container">{finalDay}</p>
          <p className="item-container">{localTime}</p>
          <img src={description} alt="description" />
          <p className="desc">{weatherData.description}</p>
        </div>
      </div>
    </StyledDescription>
  );
}

export default Description;

const StyledDescription = styled.div`
  .description,
  .descContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-shadow: 0 0 2px #ffffff;
    @media (max-width: 768px) {
      font-size: 0.9rem;
      justify-content: flex-start;
    }
  }

  .descContainer.item-container {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
    }
  }

  .descContainer {
    color: #fff;
    img {
      @media (max-width: 768px) {
        width: 40%;
      }
    }
  }

  .desc {
    text-transform: capitalize;
    text-shadow: 0 0 2px #ffffff;
  }
`;
