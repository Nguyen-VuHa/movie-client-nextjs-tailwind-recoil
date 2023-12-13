const { createSlice } = require("@reduxjs/toolkit");

export const globalSlice =  createSlice({
    name: 'globals',
    initialState: {
        darkMode: false,
        isModalEnterName: true,
        fullName: "",
    },
    reducers: { 
        setDarkMode: (state, { payload }) => {
            state.darkMode = payload
        },
        setModalEnterName: (state, { payload }) => {
            state.isModalEnterName = payload
        },
        setFullName: (state, { payload }) => {
            state.fullName = payload
        },
    }
})


export const { 
    setDarkMode, 
    setModalEnterName,
    setFullName,
} = globalSlice.actions;

export default globalSlice.reducer;