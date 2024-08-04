export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const data = await response.json();
  if (!response.ok) { // 400, 500
    throw new Error('Failed to fetch places');
  }
  return data.places
} // Every function we decorate with async will return a promise.

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: "PUT",

    // body: JSON.stringify({ places }) // it can also be the shourtcut because key is the same as value. 
    body: JSON.stringify({ places: places }), // This is the data we want to send and need to be in JSON format.
    headers: {
      'Content-Type': 'application/json' // This way we inform the server that we are sending JSON.
    }
  });
  const resData = await response.json();
  if (!response.ok) { // 400, 500
    throw new Error('Failed to update user places');
  }
  return resData.message // Because the response will contain an object with a message property.
}

export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  const data = await response.json();
  if (!response.ok) { // 400, 500
    throw new Error('Failed to fetch user places');
  }
  return data.places
}

