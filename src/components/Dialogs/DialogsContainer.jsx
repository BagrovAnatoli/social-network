import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ store }) => {
    const state = store.getState();

    const addMessage = () => {
        store.dispatch(addMessageCreator());
    }

    const updateNewMessageText = (newValue) => {
        store.dispatch(updateNewMessageTextCreator(newValue));
    }

return <Dialogs dialogsPage={state.dialogsPage} users={state.users} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>;
}

export default DialogsContainer;