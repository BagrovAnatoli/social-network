import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/state';

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

    const onSendMessageClick = () => {
        dispatch(addMessageCreator());
    }

    const onNewMessageChange = (e) => {
        // const newValue = textareaRef.current.value;
        const newValue = e.target.value;
        console.log(newValue);
        dispatch(updateNewMessageTextCreator(newValue));
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
                        placeholder="Enter You Message"
                        onChange={onNewMessageChange}    
                    ></textarea>
                    <button onClick={onSendMessageClick} className={s.block + ' ' + s.button}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;