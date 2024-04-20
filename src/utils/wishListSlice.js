import { createSlice } from "@reduxjs/toolkit";


const wishListSlice = createSlice({
    name: 'wishlist',
    initialState:{
        lists:[]
    },
    reducers:{
       addToWishList:(state,action)=>{
        let present = false;   
        state.lists.forEach(list => {
              if(action.payload.productId===list.productId) present=true; 
           });
        if(!present)state.lists.push(action.payload);
       },
       removeFromWishList:(state,action)=>{
          console.log(state.lists)
          let index = -1;
          state.lists.forEach((list,idx) =>{
            if(action.payload===list.productId)index=idx;
          })
          state.lists.splice(index,1);
       }
    }

})

export const {addToWishList,removeFromWishList} = wishListSlice.actions;

export default wishListSlice.reducer;