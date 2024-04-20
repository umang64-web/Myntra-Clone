import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

function WishList() {
    const lists = useSelector((store)=>store.wishlist.lists)

  return (
    <div>
        <div className='flex flex-wrap align-middle justify-center self-stretch mt-8'>
        {lists ?( lists.map((item) => (
          <Card key={item.productId} props={item} wish={true}/>
        ))):(<></>)}
      </div>
    </div>
  )
}

export default WishList