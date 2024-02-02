import { call, put, takeEvery } from "redux-saga/effects";
import { actionAuth } from "../reducers/auth.reducer";
import authApi from "@/apis/auth";


function* loginAccountSaga(action) {
    yield put(actionAuth.setStatusLogin(true));
    try {
        const data = yield call(authApi.loginAccount, action.payload);
        yield put(actionAuth.processLogin(data));
    } catch (error) {
        yield put(actionAuth.processLogin(error.response.data));
    }
    yield put(actionAuth.setStatusLogin(false));
}

function* signUpAccountSaga(action) {
    yield put(actionAuth.setStatusSignUp(true));
    try {
        const data = yield call(authApi.signUpAccount, action.payload);
        yield put(actionAuth.processSignUp(data));
    } catch (error) {
        yield put(actionAuth.processSignUp(error.response.data));
    }
    yield put(actionAuth.setStatusSignUp(false));
}

export function* authSaga() {
    yield takeEvery('AUTH_LOGIN_ACCOUNT', loginAccountSaga)
    yield takeEvery('AUTH_SIGN_UP_ACCOUNT', signUpAccountSaga)
}