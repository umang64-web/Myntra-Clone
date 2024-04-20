import { createSlice } from "@reduxjs/toolkit";
import  data from '../../data';

const dataSlice = createSlice({
    name: 'filterData',
    initialState:{
        lists:data.products,
    },
    reducers:{
        filterData:(state,action)=>{   
           let productList = data.products;
            state.lists = productList.filter((product)=>{
            if(product.brand.toLowerCase().includes(action.payload.toLowerCase())){
                return true;
            }
            return false;
           }) 
       },
       sortData:(state,action)=>{  
        state.lists.sort(function(a,b){a.price - b.price})
       }
    }

})

export const {filterData,sortData} = dataSlice.actions;

export default dataSlice.reducer;