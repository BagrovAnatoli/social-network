import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({dialogs, messages}) => {

    const dialogsElements = dialogs
        .map(({id, name}) => <DialogItem id={id} name={name}/>);

    const messagesElements = messages
        .map(({id, message}) => <Message id={id} message={message}/>);

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