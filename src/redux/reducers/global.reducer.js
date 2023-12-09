const { createSlice } = require("@reduxjs/toolkit");


export const globalSlice =  createSlice({
    name: 'globals',
    initialState: {
        darkMode: false,
    },
    reducers: { 
        setDarkMode: (state, { payload }) => {
            state.darkMode = payload
        },
    }
})


export const { 
    setDarkMode, 
} = globalSlice.actions;

export default globalSlice.reducer;