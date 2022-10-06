import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const getUserById = (users, id) => {
    return users.find(u => u.id === id);
}

const Dialogs = ({state, users}) => {

    const dialogsElements = state.dialogs
        .map(({id, name}) => <DialogItem id={id} name={name}/>);

    const messagesElements = state.messages
        .map(({id, message, author, userId}) => {
            const avaUrl = getUserById(users, userId).ava;
            return <Message id={id} message={message} author={author} avaUrl={avaUrl}/>
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>                   
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;