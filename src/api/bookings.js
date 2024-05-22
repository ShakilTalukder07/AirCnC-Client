// Add a booking
export const addBooking = async bookingData => {
  const response = await fetch(`http://localhost:5000/bookings`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  })

  const data = await response.json()
  return data
}

// update room status
export const updateStatus = async (id, status) => {
  const response = await fetch(
    `http://localhost:5000/rooms/status/${id}`,
    {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status }),
    }
  )
  const data = await response.json()
  return data
}

// Get all bookings for a user by email
export const getBookings = async email => {
  const response = await fetch(
    `http://localhost:5000/bookings?email=${email}`
  )
  const bookings = await response.json()
  return bookings
}

// delete a booking
export const deleteBooking = async id => {
  const response = await fetch(
    `http://localhost:5000/bookings/${id}`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}

// Get all bookings for a host by email
export const getHostBookings = async email => {
  const response = await fetch(
    `http://localhost:5000/bookings/host/?email=${email}`
  )
  const bookings = await response.json()
  return bookings
}
