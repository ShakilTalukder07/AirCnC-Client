import React, { useEffect, useState } from 'react';
import Card from './Card';
import Spinner from '../Spinner/Spinner';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';

const Rooms = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category')
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/rooms")
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                }
                else {
                    setRooms(data)
                }
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [category])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            {rooms && rooms.length > 0 ? <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                {
                    rooms.map((room, index) =>
                        (<Card key={index} room={room}></Card>)
                    )
                }

            </div> : <div className='pt-12'>
                <Heading
                    title='No Rooms Available In This Category!'
                    subtitle='Please Select Other Categories.'
                    center={true}
                />
            </div>}
        </div>
    );
};

export default Rooms;