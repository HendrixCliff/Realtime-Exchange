import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../redux/counter"
import dataReducer from "./userSlice"

export default configureStore({ 
    reducer: {
        counter: counterReducer,
        data: dataReducer
    } 
    //This is where we will add our reducers
});