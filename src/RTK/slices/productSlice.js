import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk('productSlice/fetchproducts', async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = res.json()
  return data
})

const productsSlice = createSlice({
  initialState: [],
  name: "productSlice",
  //actions here 
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return action.payload
    })
  }
})


// export const { } = productsSlice.actions;
export default productsSlice.reducer;