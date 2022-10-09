const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const getLastId = (objects) => {
    return Number(objects[objects.length - 1].id);
};

const initialState = {
    dialogs: [
        {id: '1', name: 'Galina', userId: 4},
        {id: '2', name: 'Vladimir', userId: 3},
        {id: '3', name: 'Anna', userId: 2},
        {id: '4', name: 'Elena', userId: 5},
        {id: '5', name: 'Kirill', userId: 6},
        {id: '6', name: 'Olga', userId: 7},
    ],
    messages: [
        {id: '1', message: 'Hi', author: 'I', userId: 1},
        {id: '2', message: 'How is you it-kamasutra?', author: 'I', userId: 1},
        {id: '3', message: 'Good', author: 'You', userId: 2},
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
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