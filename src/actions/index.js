import axios from 'axios';

// const API_KEY = '000e52245e9cbf2a3bd9ae75ef64c86d'; // my default key
const API_KEY = '794b32ee432e5c06ccc222f8d0189bdb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// To make debugging easier and reduce chances of typo errors we make variables
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // returns promise
  
  return {
    type: FETCH_WEATHER,
    payload: request // since this is promise it goes to Redux Promise
  }
}
