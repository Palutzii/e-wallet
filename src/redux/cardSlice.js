import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [],
    activeCard: null,
    isSafetyOn: true,
    isLoading: false,
};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            if (state.cards.length < 4) {
                state.cards.push(action.payload);
                if (state.activeCard === null) {
                    state.activeCard = action.payload;
                }
            }
        },
        setActiveCard: (state, action) => {
            state.activeCard = action.payload;
        },
        removeCard: (state, action) => {
            if (state.activeCard && state.activeCard.cardNumber === action.payload) {
                console.error("Cannot remove the active card");
                alert('Cannot remove the active card');
                return;
            }
            state.cards = state.cards.filter(card => card.cardNumber !== action.payload);
        },
        toggleSafety: (state) => {
            state.isSafetyOn = !state.isSafetyOn;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { addCard,setActiveCard, removeCard, setLoading } =cardSlice.actions;

export default cardSlice.reducer;