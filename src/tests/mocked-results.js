export const mockResultString = "Mock Result"

export const locationApiErrorMsg = "Location Error - Location is invalid.";

export const spaceStationApiError = "Space Station API Error";

export const mockGeolocation = {
  getCurrentPosition: (callback) => callback({coords: {latitude:2,longitude:2}}),
};

export const mockedDOM = `
                          <div id="location-input">London</div>
`
export const mockedResultsArray = [
  {risetime: 1580137388},
  {risetime: 1580137982},
  {risetime: 1580137737},
]


