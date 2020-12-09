import { getAuthUserData } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false,
};

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, initialized: true }

        default: return state;
    }
};

let InitializedSuccess = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => {
    return (dispatch) => {
    let promise =  dispatch(getAuthUserData());

            promise.then(() => {
            dispatch(InitializedSuccess());
        });
    }
}

export default AppReducer;
