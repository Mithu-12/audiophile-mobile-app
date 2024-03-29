import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { PRODUCT_IMAGE_MAP } from "../data/product"

const initialState = {
    products: [],
    status: 'idle',
    error: null
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', async ()=>{
    const response = await fetch('http://103.28.121.57/api/products')
    console.log('respose=====',response)
    return response.json()
})

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) =>{
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            const { payload } = action;
            payload.products.forEach((product) => {
                product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage;
                product.images = PRODUCT_IMAGE_MAP[product.name].images;
            });
            state.status = 'success';
            state.products = payload.products;
                // console.log('api response', payload);
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    }
})
export const selectStatus= (state) => state.products.status;
export const selectFuturesProduct = (state) =>
        state.products.products.filter((item)=>item.is_featured)
export const selectHeadphones = (state) => 
        state.products.products.filter((item)=>item.category === 'headphones');
export const selectSpeakers = (state) => 
        state.products.products.filter((item)=> item.category === 'speakers');
export const selectEarphones = (state) => 
        state.products.products.filter((item)=> item.category === 'earphones');
    
export default productSlice.reducer;