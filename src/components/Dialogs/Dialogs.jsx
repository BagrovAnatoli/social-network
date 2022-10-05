import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.item}>
                    Sasha
                </div>
                <div className={s.item}>
                    Anna
                </div>
                <div className={s.item}>
                    Kolya
                </div>
                <div className={s.item}>
                    Lena
                </div>
                <div className={s.item}>
                    Vladimir
                </div>
            </div>
        </div>
    );
}

export default Dialogs;