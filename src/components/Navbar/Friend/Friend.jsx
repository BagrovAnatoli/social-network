import s from './Friend.module.css';

const Friend = ({user}) => {
    return (
        <div className={s.friend}>
            <img className={s.img} src={user.ava} alt="ava" />
            <p className={s.name}>{user.name}</p>
        </div>
    );
}

export default Friend;