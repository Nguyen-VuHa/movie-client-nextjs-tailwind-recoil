const { createSlice } = require("@reduxjs/toolkit");


export const configSlice =  createSlice({
    name: 'configs',
    initialState: {
        imagesApp: [],
    },
    reducers: { 
        pushImageApp: (state, { payload }) => {
            state.imagesApp.push(payload)
        },
    }
})


export const { 
    pushImageApp, 
} = configSlice.actions;

export default configSlice.reducer;