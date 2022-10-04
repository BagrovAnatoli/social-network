import s from  './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://cs10.pikabu.ru/post_img/2020/09/05/9/159931529822441155.jpg" alt="angel"/>
        </header>
    );
}

export default Header;