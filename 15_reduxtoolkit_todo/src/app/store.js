import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../features/todo/todoSlice'


//only take objects
export const store=configureStore({
  reducer :todoReducer 
}) 


