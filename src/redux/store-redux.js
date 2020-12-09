import {createStore, combineReducers, applyMiddleware} from 'redux';
import  dialogsReducer from './dialogs-reducer';
import  profileReducer  from './profile-reducer';
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reduser';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import AppReducer from './app-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: sidebarReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
window.store = store;
