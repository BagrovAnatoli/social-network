const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const getLastId = (objects) => {
    return Number(objects[objects.length - 1].id);
};

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const lastMessageId = getLastId(state.messages);
            const newMessage = {
                id: (lastMessageId + 1),
                message: state.newMessageText,
                author: 'I',
                userId: 1,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({
    type: ADD_MESSAGE,
});

export const updateNewMessageTextCreator = (newValue) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newValue,
});
export default dialogsReducer;