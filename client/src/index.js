import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const BASE_URL = 'https://api.nasa.gov/planetary/apod'
export const API_KEY = '3GA2pxnUkN1JVexpvPrtnyrmO0RlEzQHi6V9dFtX'

ReactDOM.render(<App />, document.getElementById("root"));
