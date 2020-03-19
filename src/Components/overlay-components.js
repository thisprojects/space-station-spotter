import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Errors = ({ error }) =>
  error && (
    <div className="location-error">
      <p>Error - Location Unavailable Or Unable To Acquire Geolocation</p>
    </div>
  ) || null;

const OverLay = ({ overlayState, error, submitLocation, loading }) =>
  overlayState && (
    <div className="overlay">
      <h1>Space Station Spotter</h1>
      <span className="icon">
        <FontAwesomeIcon icon={ faSatelliteDish } size="3x" />
      </span>
      <GeoCode submitLocation={ submitLocation } />
      <h2>Or</h2>
      <span className="controls">
        <InputAndButton submitLocation={ submitLocation } />
      </span>
      <Errors error={ error } />
      <Loading loading={ loading } />
    </div>
  ) || null;

export const Loading = ({ loading }) =>
  loading && (
    <div className="loading">
      <FontAwesomeIcon icon={ faSpinner } size="3x" spin />
    </div>
  );

export const GeoCode = ({ submitLocation }) => (
  <div className="geocode">
    <button onClick={() => submitLocation()}>Use Current Location</button>
  </div>
);

export class InputAndButton extends Component {
  locationRef = React.createRef();

  render() {
    return (
      <React.Fragment>
        <div className="location-input-wrapper">
          <input
            ref={ this.locationRef }
            id="location-input"
            type="text"
            placeholder="Choose Location"
          />
        </div>
        <div className="submit-button">
          <button
            onClick={() =>
              this.props.submitLocation(this.locationRef.current.value)
            }
          >
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default OverLay;
