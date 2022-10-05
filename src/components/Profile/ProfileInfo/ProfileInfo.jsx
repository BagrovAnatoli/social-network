import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <>
            <div className={s.content__img}></div>
            <div className={s.description_block} >ava + description</div>
        </>
    );
}

export default ProfileInfo;