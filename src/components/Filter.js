import React from 'react'
import { useDispatch } from 'react-redux'
import { filterData, sortData } from '../utils/dataSlice';
function Filter() {
    const dispatch = useDispatch();
  return (
    <div className='h-[40rem] w-[40rem] border border-gray-200 sticky top-[5rem] text-center my-8'>
       <div>
            <div className='font-semibold'>Filters</div>
            <button className='h-8  px- my-2 rounded-md border border-gray-400' onClick={()=>dispatch(filterData('roadster'))}>Roadster</button>
            <button className='h-8  px-2 rounded-md border border-gray-400' onClick={()=>dispatch(filterData(''))}>remove Filters</button>
       </div>
    </div>
  )
}

export default Filter