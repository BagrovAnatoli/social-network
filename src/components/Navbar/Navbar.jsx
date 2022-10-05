import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink className={({isActive}) => isActive ? s.active_link : s.link} to="/profile">Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={({isActive}) => isActive ? s.active_link : s.link}  to="/dialogs">Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={({isActive}) => isActive ? s.active_link : s.link}  to="/news">News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={({isActive}) => isActive ? s.active_link : s.link}  to="/music">Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={({isActive}) => isActive ? s.active_link : s.link}  to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;