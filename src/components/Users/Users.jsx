import React from 'react';
import s from './Users.module.css';
import AvaMini from './../AvaMini/AvaMini';
import { usersAPI } from '../../api/api';
import { follow, unfollow } from '../../redux/users-reducer-2';

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
                    <AvaMini id={u.id} photoSmall={u.photos.small} />
                    <div>
                        {u.followed
                            ? <button
                                disabled={(()=>props.followingInProgress.some(id => id===u.id))()}
                                onClick={()=>{
                                    props.toggleFollowingProgress(true, u.id);
                                    usersAPI.unfollow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id);
                                            props.toggleFollowingProgress(false, u.id);
                                    }
                                });
                            
                            }}
                            >Unfollow</button>
                            : <button
                                disabled={(()=>props.followingInProgress.some(id => id===u.id))()}
                                onClick={()=>{
                                    props.toggleFollowingProgress(true, u.id);
                                    usersAPI.follow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id);
                                            props.toggleFollowingProgress(false, u.id);
                                    }
                                });
                            
                            }}
                            >Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default  Users;