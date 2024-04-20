import React,{useState} from 'react'
import {FiSearch} from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { filterData } from '../utils/dataSlice';
function SearchBar() {
    const [searchText,setSearchText] = useState('')
    const dispatch = useDispatch();
    const handleSearch = (e)=>{
        setSearchText(e.target.value)
    }

    const onSearch = ()=>{
      dispatch(filterData(searchText));
    }

  return (
    <div className='w-[32%] flex relative ml-10'> 
 
    <button className='searchbtn absolute top-5 left-2' onClick={onSearch}><FiSearch className='text-gray-500'/></button>
    <input type='text' placeholder='Search for products, brands and more' value={searchText} onChange={handleSearch} className='text-sm text-gray-600 font-medium font-sans focus:outline-none focus:border focus:border-gray-200 w-[100%] rounded-sm h-10 my-2 bg-gray-100 focus:bg-white py-2 px-2 pl-10'></input>
    </div>
  )
}

export default SearchBar