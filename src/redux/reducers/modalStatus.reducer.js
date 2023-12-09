const { createSlice } = require("@reduxjs/toolkit");


export const modalStatusSlice =  createSlice({
    name: 'modal_status',
    initialState: {
        modalLogin: false,
        modalSignUp: false
    },
    reducers: { 
        setModalLogin: (state, { payload }) => {
            state.modalLogin = payload
        },
        setModalSignUp: (state, { payload }) => {
            state.modalSignUp = payload
        },
    }
})


export const { 
    setModalLogin, setModalSignUp
} = modalStatusSlice.actions;

export default modalStatusSlice.reducer;