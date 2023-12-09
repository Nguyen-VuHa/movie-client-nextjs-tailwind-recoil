import authSlice from './reducers/auth.reducer';
import configSlice from './reducers/config.reducer';
import globalSlice from './reducers/global.reducer';
import modalStatusSlice from './reducers/modalStatus.reducer';

export const rootReducer = {
    configState: configSlice,
    globalState: globalSlice,
    modalStatusState: modalStatusSlice,
    authState: authSlice,
}