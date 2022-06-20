import React from 'react'
import { ApiCategories } from '../api/CategoryApi'
import Catagory from './Category'
function Catagories () {
    return <div className='flex justify-between items-center p-5'>
        {ApiCategories.map((catagory, index)=>(
            <Catagory item={catagory} key={index } />
        ))}
    </div>
}

export default Catagories;
