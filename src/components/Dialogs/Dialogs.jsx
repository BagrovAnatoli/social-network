import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const getUserById = (users, id) => {
    return users.find(u => u.id === id);
}

const Dialogs = ({dialogsPage, users, dispatch }) => {

    const dialogsElements = dialogsPage.dialogs
        .map(({id, name}) => <DialogItem key={id} id={id} name={name}/>);

    const messagesElements = dialogsPage.messages
        .map(({id, message, author, userId}) => {
            const avaUrl = getUserById(users, userId).ava;
            return <Message key={id} id={id} message={message} author={author} avaUrl={avaUrl}/>
    });

    const textareaRef = React.createRef();

    const sendMessage = () => {
        const text = textareaRef.current.value;
        dispatch(addMessageActionCreator());
    }

    const updateState = () => {
        const newValue = textareaRef.current.value;
        console.log(newValue);
        dispatch(updateNewMessageTextActionCreator(newValue));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>                   
                {dialogsElements}
            </div>
            <div className={s.messages_block}>
                <div>
                    {messagesElements}
                </div>
                <div className={s.send_block}>
                    <textarea
                        ref={textareaRef}
                        className={s.block + ' ' + s.textarea}
                        value={dialogsPage.newMessageText}
                        onChange={updateState}    
                    ></textarea>
                    <button onClick={sendMessage} className={s.block + ' ' + s.button}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;