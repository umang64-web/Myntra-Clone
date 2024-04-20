import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data';
import Shimmer from './Shimmer';
import { useDispatch } from 'react-redux';
import { addToBag } from '../utils/bag';
import { addToWishList } from '../utils/wishListSlice';


const SingleProductPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = data.products.find((p)=>p.productId == id)

  return (
    <>
    {product?(
    <div className="container mx-auto py-8 px-8">
      <div className="flex">
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {product.images.filter((img)=>(img.view!=='size_representation')).map((image, index) => (
             <img
                key={index}
                src={image.src}
                alt={product.productName}
                className="w-full"
              />
))}
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-semibold mb-2">{product.brand}</h1>
          <p className="text-gray-600 mb-4">{product.productName}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl mr-1">&#9733;</span>
            <span className="text-gray-600">{product.rating.toFixed(1)}</span>
            <span className="text-gray-500 ml-2">({product.ratingCount} ratings)</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-red-500 line-through mr-1">Rs. {product.mrp}</span>
            <span className="text-green-500">Rs. {product.price}</span>
          </h2>
          <p className="text-gray-600 mb-4">{product.additionalInfo}</p>
          <div className="flex mb-4">
            {product.sizes.split(',').map((size, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-10 h-10 bg-gray-50 border border-gray-200 rounded-full text-gray-500 font-semibold mr-2"
              >
                {size}
              </div>
            ))}
          </div>
          <div className='flex'>
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded" onClick={()=>dispatch(addToBag(product))}>
            Add to Cart
          </button>
          <button className="bg-white hover:bg-gray-200 py-2 px-10 rounded border border-gray-200 mx-5" onClick={()=>dispatch(addToWishList(product))}>
            Add to Wish List
          </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-pink-600">Product Details:</h3>
            <ul className="list-disc list-inside">
              <li>Gender: {product.gender}</li>
              <li>Color: {product.primaryColour}</li>
              <li>Discount: {product.discountDisplayLabel}</li>
            </ul>
          </div>
        </div>
      </div>
      </div>):(
        <Shimmer/>
      )}
      </>
  );
};

export default SingleProductPage;
