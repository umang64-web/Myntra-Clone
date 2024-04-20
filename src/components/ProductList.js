import React from 'react'
import Card from './Card';

export default function ProductList({products}) {
  return (
    <div className='flex flex-wrap align-middle justify-center self-stretch mt-8'>
    {products.map((item) => (
          <Card key={item.productId} props={item} />
        ))}
    </div>
  )
}
