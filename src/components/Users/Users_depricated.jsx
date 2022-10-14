import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';

const Users = ({users, follow, unfollow, setUsers}) => {

    const getUsers = () => {
        if (users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    
                setUsers(
                    [...response.data.items]
                );
            });
    
            // setUsers(
            //     [
            //         {id: 1,
            //             photoUrl: "https://storge.pic2.me/upload/207/5669d2805eada.jpg",
            //             followed: false, fillName: 'Dmitri', status: 'I`m developer', location: {city: 'Minsk', country: 'Belarus'}},
            //         {id: 2,
            //             photoUrl: "https://storge.pic2.me/upload/207/5669d2805eada.jpg",
            //             followed: false, fillName: 'Olga', status: 'So good', location: {city: 'Nizhniy Novgorod', country: 'Russia'}},
            //         {id: 3,
            //             photoUrl: "https://storge.pic2.me/upload/207/5669d2805eada.jpg",
            //             followed: true, fillName: 'Nikita', status: 'I love world', location: {city: 'Kiev', country: 'Ukraine'}},
            //         {id: 4,
            //             photoUrl: "https://storge.pic2.me/upload/207/5669d2805eada.jpg",
            //             followed: true, fillName: 'Leonid', status: 'Have a nice day', location: {city: 'Drezden', country: 'Germany'}},
            //         {id: 5,
            //             photoUrl: "https://storge.pic2.me/upload/207/5669d2805eada.jpg",
            //             followed: true, fillName: 'Chan', status: 'Comon everybody', location: {city: 'Pekin', country: 'China'}},
            //     ]
            // );
        }
    };
    
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            className={s.users_photo}
                            alt="ava"
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                        />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>(unfollow(u.id))}>Unfollow</button>
                            : <button onClick={()=>(follow(u.id))}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{u.location.country}</div> */}
                        {/* <div>{u.location.city}</div> */}
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default  Users;