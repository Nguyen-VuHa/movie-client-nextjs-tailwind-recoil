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
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            birthDay: '',
            address: '',
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
        // set state Sign Up
        setFullNameSignUp: (state, { payload }) => {
            state.formSignUp.fullName = payload
        },
        setEmailSignUp: (state, { payload }) => {
            state.formSignUp.email = payload
        },
        setPasswordSignUp: (state, { payload }) => {
            state.formSignUp.password = payload
        },
        setPasswordConfirmSignUp: (state, { payload }) => {
            state.formSignUp.confirmPassword = payload
        },
        setPhoneNumberSignUp: (state, { payload }) => {
            state.formSignUp.phoneNumber = payload
        },
        setBirthDaySignUp: (state, { payload }) => {
            state.formSignUp.birthDay = payload
        },
        setAddressSignUp: (state, { payload }) => {
            state.formSignUp.address = payload
        },

    }
})

export const actionAuth = authSlice.actions;

export default authSlice.reducer;