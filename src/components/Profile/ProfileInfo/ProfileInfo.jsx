import s from './ProfileInfo.module.css';
import SocialButtons from '../SocialButtons/SocialButtons';

const ProfileInfo = (props) => {
    const profile = props.profile;
    if (!profile) return null;

    const contacts = profile.contacts;
    return (
        <div className={s.info_container}>
            <div className={s.content__img}></div>
            <div className={s.ava_wrapper}><img className={s.ava} alt="ava" src={profile.photos.large} /></div>
            <div className={s.description_block} >
                <div>Обо мне: {profile.aboutMe}</div>
                {profile.lookingForAJob && <div>Ищу работу</div>}
                {profile.lookingForAJobDescription && <div>{profile.lookingForAJobDescription}</div>}
            </div>
            <SocialButtons contacts={contacts}/>
        </div>
    );
}

export default ProfileInfo;


// {
//     "aboutMe": "я круто чувак 1001%",
//     "contacts": {
//       "facebook": "facebook.com",
//       "website": null,
//       "vk": "vk.com/dimych",
//       "twitter": "https://twitter.com/@sdf",
//       "instagram": "instagra.com/sds",
//       "youtube": null,
//       "github": "github.com",
//       "mainLink": null
//     },
//     "lookingForAJob": true,
//     "lookingForAJobDescription": "не ищу, а дурачусь",
//     "fullName": "samurai dimych",
//     "userId": 2,
//     "photos": {
//       "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
//       "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
//     }
//   }
// <i class="fa-regular fa-person-sign"></i> - человечек с табличкой. Типа ищет работу