import React, { useState,useEffect } from 'react'
import { BiRupee } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { addToWishList, removeFromWishList } from '../utils/wishListSlice'
import { useSelector } from 'react-redux'
import { addToBag } from '../utils/bag'
import { Link } from 'react-router-dom'

const Card = ({ props, wish=false }) => {
const [currentIndex, setCurrentIndex] = useState(0);

const [isHovered, setIsHovered] = useState(false);
const [showDots,setShowDots] = useState('hidden');
const data = useSelector((store)=>store.wishlist.lists)

const dispatch = useDispatch();
  useEffect(() => {
    let intervalId;

    if (isHovered) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === props.images.length - 1 ? 0 : prevIndex + 1));
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      setCurrentIndex(0);
    };
  }, [isHovered, props.images.length]);
  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowDots('block')
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowDots('hidden');
  };

  function handleAddToWishLists(){
    if(!wish)  {
    dispatch(addToWishList(props))
       console.log(props);
    }
    else{
      dispatch(addToBag(props));
      dispatch(removeFromWishList(props.productId))
      console.log(props.productId)
    }
  }

   return (
    <>
     
     <div className="carousel items-center justify-center h-[24rem] w-[14rem] mr-10 mb-9 relative hover:shadow-lg"  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
<Link to={`/product/${props.productId}`}> 
<div className="image-container w-[100%] h-auto">
        <img src={props?.images[currentIndex]?.src} alt={props?.images[currentIndex]?.view} />
      </div>
      </Link>
      <div className={`${showDots} mt-4 absolute top-[60%] bg-white w-[100%] h-[4rem] pt-2`}>
        
        <div className='m-auto flex ml-[30%] mb-2'>
        {props.images.map((_, index) => (
          <div
            key={index}
            className={`rounded-full mx-1 w-[0.2rem] h-[0.2rem] ${currentIndex === index ? 'bg-pink-600 scale-125' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}

        </div>
        <div onClick={()=>handleAddToWishLists()} className='border border-gray-300 w-[90%] h-[2rem] mx-3 my-1 text-center rounded-sm cursor-pointer hover:border-gray-800 font-sans text-base font-[600] px-2 text-slate-900'>
            {wish?'Add to bag':'wishlist'}
        </div>
      </div>
      <Link to={`/product/${props.productId}`}> 
      <div className='relative pb-6'>
            <p className='font-sans text-base font-[700] px-2 text-slate-900'>{props.brand}</p>
            <p className='overflow-hidden px-2 text-sm text-left text-ellipsis h-6 whitespace-nowrap text-slate-400'>{props.productName}</p>
            <p className=' flex px-2'><span className='flex items-center text-sm font-medium'><BiRupee />{props.price}</span >&nbsp;
            <span className='flex items-center text-sm font-medium text-slate-400 line-through'><BiRupee />{props.mrp}</span>&nbsp;&nbsp;
            <span className='flex items-center text-xs font-medium text-rose-500'>( {-Math.round(props.price / props.mrp * 100 - 100)}% OFF )</span></p>
      </div>
      </Link>
    </div>
    </>
    )
}

export default Card;