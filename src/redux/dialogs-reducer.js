const SEND_MESSAGE = 'SEND-MESAGE';

let initialState = {
    messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "are" },
    ],
    dialogs: [
        { id: "1", name: "Dima" },
        { id: "2", name: "Pet" },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return { ...state, messages: [...state.messages, { id: "6", message: body }] }
        default: return state;
    }
};

export let sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
