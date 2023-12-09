const { createSlice } = require("@reduxjs/toolkit");


export const authSlice =  createSlice({
    name: 'authenticate',
    initialState: {
        formSignIn: {
            email: '',
            password: '',
            ipAddress: '',
        },
        errorSignIn: {},
        formSignUp: {
            
        },
        errorSignUp: {},
    },
    reducers: { 
        // set state Sign In
        setEmailSignIn: (state, { payload }) => {
            state.formSignIn.email = payload
        },
        setPasswordSignIn: (state, { payload }) => {
            state.formSignIn.password = payload
        },
        setIPAdressSignIn: (state, { payload }) => {
            state.formSignIn.ipAddress = payload
        },
        
    }
})


export const { 
    setEmailSignIn, setPasswordSignIn, setIPAdressSignIn,
} = authSlice.actions;

export default authSlice.reducer;