import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

return <StoreContext.Consumer>{
        (store) => {
            const state = store.getState();

            const addMessage = () => {
                store.dispatch(addMessageCreator());
            }
        
            const updateNewMessageText = (newValue) => {
                store.dispatch(updateNewMessageTextCreator(newValue));
            }

            return (
                <Dialogs
                    dialogsPage={state.dialogsPage}
                    users={state.users}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            )
        }
    }
    </StoreContext.Consumer> 

}

export default DialogsContainer;