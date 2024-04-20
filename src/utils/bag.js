import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
    name: 'bag',
    initialState:{
        lists:[]
    },
    reducers:{
       addToBag:(state,action)=>{
        let present = false;   
        state.lists.forEach(list => {
              if(action.payload.productId===list.productId) present=true; 
           });
        if(!present)state.lists.push(action.payload);           
       },
       removeFromBag:(state,action)=>{
          state.lists.filter((list)=>{action.payload===list.productId})
       },
       clearBag:(state,action)=>{
         state.lists=[];
       }
    }

})

export const {addToBag,removeFromBag,clearBag} = bagSlice.actions;

export default bagSlice.reducer;