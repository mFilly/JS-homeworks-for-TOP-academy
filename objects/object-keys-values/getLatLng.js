/**
 * @param {object} userLocation
 * @param {number} userLocation.lat
 * @param {number} userLocation.lng
 */
 const getLatLng = userLocation => {
    const {lat, lng}=userLocation
	return `The latitude is ${lat} and the longitude is ${lng}`
}

// Sample usage - do not modify
const userLocation = {
  lat: 24.235235,
  lng: 2.5734,
};

console.log(getLatLng(userLocation)); 
// The latitude is 24.235235 and the longitude is 2.5734