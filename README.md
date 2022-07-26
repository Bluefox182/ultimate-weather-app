# 🌤️ My Ultimate Weather App | Bluefox182
![Vercel](https://vercelbadge.vercel.app/api/bluefox182/ultimate-weather-app?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MIT)
---
>Weather App built with React. 
>This App shows a 5-day forecast for whatever location the user chooses to search for.
>It fetch data from OpenWeather, Google Time Zone and Unsplash API as well.

## Deploy
This App has been deployed at [Vercel](https://vercel.com/) and you can check it out here: https://bluefox182-weather-app.vercel.app/ .

## Project Description
This a solo Front-End project to build a Weather App using ReactJs.

## Installation and Usage

### Installation
- Clone this Repo  and navigate to root directory. You can use `git clone [URL]`
- After that, in your Terminal run this: `cd ultimate-weater-app`

### Usage
- In `ultimate-weather-app` directory (You can run `pwd` to make sure), run `npm install` and then `npm start`, the project should automatically load on `http://localhost:3000`

## API Keys
You will need to create a `.env` file in the root of the `ultimate-weather-app` folder, this file should hold the following API Keys in order to run this project locally:

```
REACT_APP_UNSPLASH_KEY= your_API_key
REACT_APP_OPENWEATHER_KEY= your_API_key
REACT_APP_GOOGLE_API_KEY= your_API_key
```
### Technologies
- React
- NodeJs
- CSS

### Dependencies
- DayJs
- Styled-Components
- Material UI Icons
- React Animation Weather Icons

### API
This project consumes the following APIs:
- [OpenWeatherMap](https://openweathermap.org/api) API for live weather data and weather forecast data
- [Google Time Zone](https://developers.google.com/maps/documentation/timezone/overview) API for getting local time and dates for whichever city/country the user searches for
- [Unsplash](https://api.unsplash.com/) API for background images relating to the city/country


