import s from  './Header.module.css';
import { Link } from 'react-router-dom';
import AvaMini from '../AvaMini/AvaMini';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://cs10.pikabu.ru/post_img/2020/09/05/9/159931529822441155.jpg" alt="angel"/>

            <div className={s.login_block}>
                {props.isAuth
                ? <><AvaMini id={props.id} photoSmall={props.photoSmall}/> {props.login}</>
                : <Link to="/login">Login</Link>
            }
            </div>
        </header>
    );
}

export default Header;