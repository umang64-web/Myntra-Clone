import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { clearBag } from '../utils/bag';

const Bag = () => {
  const cartItems = useSelector((store)=>store.bag.lists);
  const dispatch = useDispatch();
  console.log(cartItems)
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.productId} className="flex items-center mb-4">
              <img
                src={item.images[0].src}
                alt={item.productName}
                className="w-20 h-20 mr-4 ml-2"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.productName}</h2>
                <p className="text-gray-600">Price: Rs. {item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="flex justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded" onClick={()=>dispatch(clearBag())}>
            Clear Bag
          </button>
        </div>
      )}
    </div>
  );
};

export default Bag;
