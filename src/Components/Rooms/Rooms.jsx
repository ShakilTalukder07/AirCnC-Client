import React, { useEffect, useState } from 'react';
import Card from './Card';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch("./rooms.json")
            .then(res => res.json())
            .then(data => setRooms(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                {
                    rooms.map(room =>
                        (<Card room={room}></Card>)
                    )
                }

            </div>
        </div>
    );
};

export default Rooms;