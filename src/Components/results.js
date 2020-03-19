import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const padSingleDigitWithZero = number => (number < 10 && `0${ number }`) || number;

export const unixTimeConverter = timestamp => {
  let a = new Date(timestamp * 1000);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = padSingleDigitWithZero(a.getHours());
  let min = padSingleDigitWithZero(a.getMinutes());
  let sec = padSingleDigitWithZero(a.getSeconds());
  return ` ${ date } / ${ month } / ${ year }  at  ${ hour }:${ min }:${ sec }`;
};

export const MapResults = ({ results }) =>
  results.map((pass, index) => (
    <div className="result-row" key={ index }>
      <p key={ index + 1 }>
        { index + 1 }
        <span>
          <FontAwesomeIcon icon={ faClock } />
        </span>
        {unixTimeConverter(pass.risetime)}
      </p>
    </div>
  ));

const DisplayResults = ({ results, reset, address }) =>
  results && (
    <div className="results">
      <p>{ address }</p>
      <MapResults results={ results } />
      <ChooseAnotherLocation reset={ reset } />
    </div>
  );

export const ChooseAnotherLocation = ({ reset }) => (
  <div className="choose-another-location">
    <button onClick={() => reset(true)}>Choose Another Location</button>
  </div>
);

export default DisplayResults;
