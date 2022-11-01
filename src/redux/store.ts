import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slice/cartSlice';
import auntificationSlice from "./slice/auntificationSlice";
export const store = configureStore({
	reducer:{
		cartSlice,
        auntificationSlice
	}
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch