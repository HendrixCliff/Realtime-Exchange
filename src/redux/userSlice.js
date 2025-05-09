import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './fetchData';


const initialState = {
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null, 
    data8: null,
    loading: false,
    error: null,
  }

//Open Exchange API 9f045b9695f64b39a1e6fd49dc5ff807
// https://openexchangerates.org/api/currencies.json?app_id=9f045b9695f64b39a1e6fd49dc5ff807&base=GBP


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data6 = action.payload.data6;
        state.data7 = action.payload.data7;
        state.data8 = action.payload.data8;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dataSlice.reducer;
