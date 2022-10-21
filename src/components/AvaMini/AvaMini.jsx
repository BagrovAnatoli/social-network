import {Link} from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import s from './AvaMini.module.css';

const AvaMini = ({id, photoSmall}) => {
    return <div>
        <Link to={`/profile/${id}`}>
            <img
                className={s.users_photo}
                alt="ava"
                src={photoSmall != null ? photoSmall : userPhoto}
            />
        </Link>
    </div> 
}

export default AvaMini;