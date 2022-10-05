import s from "../Dialogs.module.css";
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

export default DialogItem;