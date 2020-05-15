import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { getResults } from "./Utils/network-requests";
import DisplayResults from "./Components/results.js";
import OverLay from "./Components/overlay-components.js";


export class SpaceStationSpotter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 52.489471,
      lng: -1.898575,
      error: false,
      spaceStationResults: null,
      overlayState: true,
      loadingState: false
    };
    this.setOverlayState = this.setOverlayState.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  setOverlayState(state) {
    this.setState({ overlayState: state });
  }

  async setLocation(location) {
    this.setState({ loadingState: true, error: false })

    let locationResult = await getResults(location).catch(() => {
      this.setState({ error: true, loadingState: false });
    });

    const { lat, lng, spaceStationResults, address } = locationResult || {};
    !this.state.error &&
      this.setState({
        lat,
        lng,
        spaceStationResults,
        address,
        loadingState: false,
        overlayState: false
      });
  }

  render() {
    const { lat , lng , spaceStationResults, error, overlayState, loadingState, address } = this.state
    return (
      <div id="page-wrapper">
        <OverLay
          overlayState={ overlayState }
          submitLocation={ this.setLocation }
          error={ error }
          loading={ loadingState }
        />
        <div id="map" className="map">
          <Map
            initialCenter={{
              lat: 52.489471,
              lng: -1.898575
            }}
            center={{
              lat,
              lng
            }}
            google={ this.props.google }
            zoom={3}
            className={"map"}
          >
            <Marker
              position={{ lat, lng }}
              name={"Current location"}
            />
          </Map>
          <DisplayResults
            reset={ this.setOverlayState }
            results={ spaceStationResults }
            address= { address }
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "OBSCURED"
})(SpaceStationSpotter);
