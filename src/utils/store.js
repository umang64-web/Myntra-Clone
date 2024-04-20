import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./wishListSlice";
import bagSlice from "./bag";
import dataSlice from "./dataSlice";
const store = configureStore({
    reducer:{
        wishlist : wishListSlice,
        bag : bagSlice,
        filterData : dataSlice,
    }
});

export default store;