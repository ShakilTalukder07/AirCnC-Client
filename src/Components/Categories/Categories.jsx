
import React from 'react';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';


const Categories = () => {
    
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
                {
                    categories.map(item => (
                        <CategoryBox label={item.label} icon={item.icon} key={item.label}></CategoryBox>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;