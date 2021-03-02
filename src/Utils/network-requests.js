export const GeoLocation = () => {
  return new Promise((res, rej) => {
    let timer = setTimeout(function () {
      return rej("GeoLocation Time Out");
    }, 10000);

    navigator.geolocation.getCurrentPosition((pos) => {
      clearTimeout(timer);
      const lng = pos.coords.longitude;
      const lat = pos.coords.latitude;
      res(`${lat} ${lng}`);
    });
  });
};

const fetchLocation = (location) =>
  fetch(
    "https://us-central1-nathan-downes-express-api.cloudfunctions.net/api/maps",
    { method: "POST", body: `${location}` }
  )
    .then((r) => r.json())
    .then((r) => ({
      coords: r.results[0].geometry.location,
      address: r.results[0]["formatted_address"],
    }));

export const callSpaceStationApi = (lat, lng) =>
  fetch(
    `https://api.codetabs.com/v1/proxy?quest=http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lng}&alt=20&n=3`
  )
    .then((r) => r.json())
    .then((data) => data.response || null);

export const getResults = async (location) => {
  let searchLocation = location;

  // If no location is provided use HTML 5 geolocation API for coords
  !location && (searchLocation = await GeoLocation());

  const locationData = await fetchLocation(searchLocation);

  const {
    coords: { lat, lng },
    address,
  } = locationData;

  const spaceStationResults = await callSpaceStationApi(lat, lng);
  if (!spaceStationResults)
    throw new Error("Bad response from space station API");

  return { lat, lng, spaceStationResults, address };
};
