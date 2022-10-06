import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Friend from './Friend/Friend';

const Navbar = ({users}) => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav_list}>
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
            <div className={s.friends_block}>
                <h4>Friends</h4>
                <div className={s.friends}>
                    <Friend user={users[1]}/>
                    <Friend user={users[2]}/>
                    <Friend user={users[3]}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;