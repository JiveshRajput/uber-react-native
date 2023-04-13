import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        navToggle: true,
        origin: null,
        destination: null,
        travelTimeInformation: null,
        showBookingModal: null,
    },
    reducers: {
        setOrigin(state, action) {
            state.origin = action.payload;
        },
        setDestination(state, action) {
            state.destination = action.payload;
        },
        setTravelTimeInformation(state, action) {
            state.travelTimeInformation = action.payload;
        },
        setBookingModal(state, action) {
            state.showBookingModal = action.payload;
        },
    }
})

export const getOrigin = (state) => state.nav.origin;
export const getDestination = (state) => state.nav.destination;
export const getTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const getBookingModal = (state) => state.nav.showBookingModal;

export const { setBookingModal, setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

export default navSlice.reducer
