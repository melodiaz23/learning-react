import Places from './Places.jsx';
import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc';
import { fetchAvailablePlaces } from '../http';

export default function AvailablePlaces({ onSelectPlace }) {
  // When fetching data is so comun to use this 3 states:
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch will send a get request to the URL
  //   fetch('http://localhost:3000/places').then((res) => {
  //     if (res.ok) {
  //       return res.json(); // json is the facto standard data format for exchanging data with the backend.
  //     }
  //   }).then((data) => {
  //     setAvailablePlaces(data.places)
  //   })
  // }, []); // Only execute once after this component executed for the first time.

  // ALTERNATIVE
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces(); // Await because we want to wait for the promise to resolve.
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          const sortedPlaces = sortPlacesByDistance(places, latitude, longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        })
      } catch (error) {
        setError({
          message: error.message || 'Something went wrong',
        });
        setIsFetching(false);
      }
    }
    fetchPlaces();

  }, []); // Only execute once after this component executed for the first time.

  if (error) {
    return <Error message={error.message} title="Error" />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
