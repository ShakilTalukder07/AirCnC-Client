import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'

import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../Layout/DashboardLayout'
import AddRoom from '../Pages/Dashboard/AddRoom'
import MyBookings from '../Pages/Dashboard/MyBookings'
import MyListings from '../Pages/Dashboard/MyListings'
import ManageBookings from '../Pages/Dashboard/ManageBooking'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import { getRoom } from '../api/rooms'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: (

          // <PrivateRoute>
          <RoomDetails />
          // </PrivateRoute>

        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: '/dashboard/', element: <MyBookings /> },
      { path: '/dashboard/add-room', element: <AddRoom /> },
      { path: '/dashboard/my-bookings', element: <MyBookings /> },
      { path: '/dashboard/my-listings', element: <MyListings /> },
      { path: '/dashboard/manage-bookings', element: <ManageBookings /> },
    ],
  },
])
