import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './cardSlice';
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        cards: cardReducer,
        user: userReducer,
    },
});