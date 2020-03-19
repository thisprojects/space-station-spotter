import { getResults } from "../utils/network-requests.js";
import { mockedDOM, mockGeolocation } from "../tests/mocked-results.js";

let response = "Mocked Space Station Response";

let mockApiResponse = {
  response: response,
  results: [
    {
      geometry: {
        location: { lat: 2, lng: 1 }
      },
      ["formatted_address"]: "Mock Address"
    }
  ]
};

let mockResult = {
  lat: 2,
  lng: 1,
  spaceStationResults: "Mocked Space Station Response",
  address: "Mock Address"
};

let json = () => mockApiResponse;

global.fetch = () => {
  return new Promise((res, rej) => {
    return res({
      json
    });
  });
};

global.navigator.geolocation = mockGeolocation;

document.body.innerHTML = mockedDOM;

test("test getResults", async () => {
  let x = await getResults();
  expect(x).toEqual(mockResult);
});
