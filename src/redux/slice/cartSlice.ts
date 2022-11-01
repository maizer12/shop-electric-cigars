import { createSlice } from "@reduxjs/toolkit";
import BasketDB from "../../json/basket.json";
const initialState = {
    cartBue: {
        "image": ["./img/cart/4.png", "./img/cart/1.png", "./img/cart/2.png", "./img/cart/3.png"],
		"name": "Augvape Druga Squonker Kit model Q445",
		"price": 599,
		"sale": 799,
        "cashback":20,
		"type": "NEW",
        "star": 3,
        "amount": 1,
        "reviews": ["Вообще топ", "Вчера купил, мне понравилось", "Пацаны советую"]
        },
    BasketDBState: BasketDB
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        setCartAdd : (state, action)=>{
            state.cartBue = action.payload
        },
        setBasketDB:(state, action)=>{
            state.BasketDBState = action.payload;
        }
    }
});
export const { setCartAdd, setBasketDB } = cartSlice.actions;
export default cartSlice.reducer;