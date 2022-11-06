import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component="textarea"
                name="myMessage"
                className={s.block + ' ' + s.textarea}
                placeholder="Enter You Message"
            ></Field>
            <button className={s.block + ' ' + s.button}>Send</button>
        </form>
    );
};

const DialogReduxForm = reduxForm({
  form: 'dialog',
})(DialogForm)

const getUserById = (users, id) => {
    return users.find(u => u.id === id);
}

const Dialogs = ({dialogsPage, users, addMessage, updateNewMessageText}) => {

    const dialogsElements = dialogsPage.dialogs
        .map(({id, name}) => <DialogItem key={id} id={id} name={name}/>);

    const messagesElements = dialogsPage.messages
        .map(({id, message, author, userId}) => {
            const avaUrl = getUserById(users, userId).ava;
            return <Message key={id} id={id} message={message} author={author} avaUrl={avaUrl}/>
    });

    const onSubmit = (formData) => {
        console.log(formData);
        addMessage(formData.myMessage);
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
                    <DialogReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;