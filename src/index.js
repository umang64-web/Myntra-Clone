import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import Body from "./components/Body";
import WishList from "./components/WishList";
import SingleProductPage from "./components/SingleProductPage";
import Bag from "./components/Bag";


const router = createBrowserRouter([{
       path:'/',
       element:<App/>,
       errorElement:<Error/>,
       children:[
              {
                  path:'/',
                  element:<Body/>
              },
              {
                     path:'/wishlist',
                     element:<WishList/>
              },
              {
                     path:'/product/:id',
                     element:<SingleProductPage/>
              },
              {
                     path:'/bag',
                     element:<Bag/>
              }
       ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>)