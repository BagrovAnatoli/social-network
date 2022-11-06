const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const lastMessageId = getLastId(state.messages);
            const newMessage = {
                id: (lastMessageId + 1),
                message: action.newMessageText,
                author: 'I',
                userId: 1,
            };
            // state.messages.push(newMessage);
            // state.newMessageText = '';
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
}

export const addMessageCreator = (newMessageText) => ({
    type: ADD_MESSAGE,
    newMessageText,
});

export default dialogsReducer;