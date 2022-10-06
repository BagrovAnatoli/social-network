import s from "./Message.module.css";

const Message = ({ message, author, avaUrl }) => {
    const classPosition = author === 'I' ? s.right : s.left;
    return (
        <div className={s.message + ' ' + classPosition}>
            {message}
            <img className={s.ava} src={avaUrl} alt="ava" />
        </div>
    );
}

export default Message;