import s from './Loader.module.css';

const Loader = () => {
    return <div className={s.container}>
    <div className={s.spinner}>
        <div className={s.block}>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
        </div>
    </div>
</div>
}

export default Loader;