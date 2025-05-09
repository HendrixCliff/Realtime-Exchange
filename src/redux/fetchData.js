import {   createAsyncThunk } from '@reduxjs/toolkit';
import {   fetchData6, fetchData7, fetchData8 } from '../redux/fetchDataUrls';


//{
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//     }
// }





export const fetchData = createAsyncThunk(
  'user/fetchUserData',
  async (params, { rejectWithValue }) => {
   
    //   const { apiUrl} = params;
      try {
        const [response6, response7, response8] = await Promise.all([
            fetchData6(),
            fetchData7(),
            fetchData8(),
          ]);

          const data6 = response6.data;
          const data7 = response7.data;
          const data8 = response8.data;

          return { data6, data7, data8}
      } catch (error) {
          if (error.response) {
              // The request was made and the server responded with a status code that falls out of the range of 2xx
              return rejectWithValue(error.response.data);
          } else if (error.request) {
              // The request was made but no response was received
              return rejectWithValue('No response received from server');
          } else {
              // Something happened in setting up the request that triggered an Error
              return rejectWithValue(error.message);
          }
      }
  }
);




