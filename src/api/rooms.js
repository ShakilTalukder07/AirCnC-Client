// Add a room
export const addRoom = async roomData => {
  const response = await fetch("http://localhost:5000/rooms", {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
    body: JSON.stringify(roomData),
  })

  const data = await response.json()
  return data
}

// Get all rooms
export const getAllRooms = async () => {
  const response = await fetch("http://localhost:5000/rooms")
  const data = await response.json()
  // console.log(data);
  return data
}

//get filtered rooms for hosts
export const getRooms = async email => {
  const response = await fetch(`http://localhost:5000/rooms/${email}`)
  const data = await response.json()
  return data
}


// Get single room
// export const getRoom = async id => {
//   const response = await fetch(`http://localhost:5000/room/${id}`)
//   const data = await response.json()
//   console.log(data);
//   return data
// }

export const getRoom = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/room/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching room data:', error);
    throw error; // Rethrow the error if you want it to be handled by the caller
  }
};



// Delete a room
export const deleteRoom = async id => {
  const response = await fetch(`http://localhost:5000/rooms/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
  const result = await response.json()
  return result
}

// update a room
export const updateRoom = async (roomData, id) => {
  const response = await fetch(`http://localhost:5000/rooms/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
    body: JSON.stringify(roomData),
  })

  const data = await response.json()
  return data
}
