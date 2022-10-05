import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = ({name, id}) => {
    return (
<       div className={s.dialog}>
            <NavLink 
                className={({isActive}) => isActive ? s.dialog_active : ''} 
                to={`/dialogs/${id}`}
            >
                {name}
            </NavLink>
        </div>
    );
}

const Message = ({ message }) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    );
}

const Dialogs = () => {
    const dialogs = [
        {id: '1', name: 'Galina'},
        {id: '2', name: 'Vladimir'},
        {id: '3', name: 'Anna'},
        {id: '4', name: 'Elena'},
        {id: '5', name: 'Kirill'},
        {id: '6', name: 'Olga'},
    ];

    const messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is you it-kamasutra?'},
        {id: '3', message: 'Good'},
    ];

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