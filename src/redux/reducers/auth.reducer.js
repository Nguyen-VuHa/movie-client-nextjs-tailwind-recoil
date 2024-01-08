import { message } from "antd"
import Cookies from 'js-cookie'
const { createSlice } = require("@reduxjs/toolkit");


export const authSlice =  createSlice({
    name: 'authenticate',
    initialState: {
        // state login
        formSignIn: {
            email: '',
            password: '',
            ipAddress: '',
        },
        errorSignIn: {},
        isLogin: false,
        // state register
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
        processLogin: (state, { payload }) => {
            if (payload.status == "SUCCESS") {
                const { accessToken, refreshToken, user } = payload;
                Cookies.set('token', accessToken, { expires: 365  })
                Cookies.set('refreshToken', refreshToken, { expires: 365  })
                Cookies.set('user', JSON.stringify(user), { expires: 365  })

                message.success(payload?.message || "Login success.")
            } else {
                message.error(payload.message || "Login failed.")
            }
        },      
        setStatusLogin: (state, {payload}) => {
            state.isLogin = payload
        },  
        setErrorMessageField: (state, {payload}) => {
            state.errorSignIn = {
                ...state.errorSignIn,
                ...payload
            }
        },
        setErrorMessageSingIn: (state, {payload}) => {
            state.errorSignIn = payload
        },
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
        setErrorMessageSingUp: (state, {payload}) => {
            state.errorSignUp = payload
        },
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