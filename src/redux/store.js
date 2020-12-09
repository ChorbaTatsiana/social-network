import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: "1", message: "Hi", likesCount: 11 },
                { id: "2", message: "are", likesCount: 11 }
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
            messages: [
                { id: "1", message: "Hi" },
                { id: "2", message: "are" },
                { id: "3", message: "Your" },
                { id: "4", message: "Hello" },
                { id: "5", message: "my" },
                { id: "6", message: "friends" }
            ],
            dialogs: [
                { id: "1", name: "Dima" },
                { id: "2", name: "Pet" },
                { id: "3", name: "Vov" },
                { id: "4", name: "Kol" },
                { id: "5", name: "Zorg" },
                { id: "6", name: "Wow" }
            ],
            newMessageBody: ""
        },
        siteBar: {}
    },
    _callSubscriber() {
        console.log("store was changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    setState() { },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBar = sidebarReducer(this._state.siteBar, action);
        this._callSubscriber(this._state);
    },
};

export default store;

window.store = store;
