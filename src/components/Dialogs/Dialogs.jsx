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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>                   
                <DialogItem id="1" name="Sasha"/>
                <DialogItem id="2" name="Anna"/>
                <DialogItem id="3" name="Kolya"/>
                <DialogItem id="4" name="Lena"/>
                <DialogItem id="5" name="Vladimir"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is you it-kamasutra?" />
                <Message message="Good" />
            </div>
        </div>
    );
}

export default Dialogs;