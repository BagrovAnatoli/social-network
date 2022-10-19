import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { Link } from 'react-router-dom';

const Users = (props) => {
    
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return (
        <div>
            {pages.map((p)=>{
                const classes = s.page_number + (props.currentPage === p ? ' ' + s.current_page : '');
                return <span
                    key={p}
                    className={classes}
                    onClick={() => props.setCurrentPageHandler(p)}
                >{p}</span>
            })}
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <Link to={`/profile/${u.id}`}>
                            <img
                                className={s.users_photo}
                                alt="ava"
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                            />
                        </Link>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>(props.unfollow(u.id))}>Unfollow</button>
                            : <button onClick={()=>(props.follow(u.id))}>Follow</button>
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