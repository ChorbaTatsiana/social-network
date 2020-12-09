import { getProfile, profileAPI } from '../API/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
let initialState = {
    posts: [
        { id: "1", message: "Hi", likesCount: 11 },
        { id: "2", message: "are", likesCount: 11 }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            console.log(action.newPostText)
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 3
            };
            return { ...state, posts: [...state.posts, newPost], newPostText: "" };

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id != action.id)
            };
        case SET_STATUS:
            return { ...state, status: action.status };
        default:
            return state;
    }
};

export let addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
let setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (id) => ({ type: DELETE_POST, id });

const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await getProfile(userId)
    dispatch(setUsersProfile(response));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export default profileReducer;
