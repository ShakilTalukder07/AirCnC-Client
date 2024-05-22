import React from 'react'
import Container from '../../Components/Shared/Container'
import RoomReservation from '../../Components/Rooms/RoomReservation'
import { useLoaderData } from 'react-router-dom'
import RoomInfo from '../../Components/Rooms/RoomInfo'
import Header from '../../Components/Rooms/Header'

const RoomDetails = () => {
  
  const roomData = useLoaderData()

  console.log(roomData.location);

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto '>
        <div className='flex flex-col gap-6'>
          <Header roomData={roomData} />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <RoomInfo roomData={roomData} />
            <div className='mb-10 md:col-span-3 order-first md:order-last'>
              <RoomReservation roomData={roomData} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default RoomDetails
