import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomUser = createAsyncThunk(
        'user/fetchRandomUser',
        async () => {
            const response = await axios.get('https://randomuser.me/api/');
            const user = response.data.results[0];
            console.log('Fetched User:', user);
            return {
                firstName: user.name.first,
                lastName: user.name.last,
                username: user.login.username,
                location: {
                    country: user.location.country,
                    city: user.location.city,
                    streetName: user.location.street.name,
                    streetNumber: user.location.street.number
                },
                picture: user.picture.large,
                registered: user.registered.date
            };
        }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        username: '',
        location: {
            country: '',
            city: '',
            streetName: '',
            streetNumber: ''
        },
        picture: '',
        registered: '',
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
                .addCase(fetchRandomUser.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(fetchRandomUser.fulfilled, (state, action) => {
                    console.log('Action Payload:', action.payload);
                    state.status = 'succeeded';
                    state.firstName = action.payload.firstName;
                    state.lastName = action.payload.lastName;
                    state.username = action.payload.username;
                    state.location = action.payload.location;
                    state.picture = action.payload.picture;
                    state.registered = action.payload.registered;
                })
                .addCase(fetchRandomUser.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                });
    },
});

export default userSlice.reducer;