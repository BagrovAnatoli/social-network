import React from 'react';
import s from './Users.module.css';
import AvaMini from './../AvaMini/AvaMini';
import axios from 'axios';

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
                            ? <button onClick={()=>{
                                
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '906deb40-189c-468a-9e06-c52268474800',
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                            
                            }}>Unfollow</button>
                            : <button onClick={()=>{
                                
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '906deb40-189c-468a-9e06-c52268474800',
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                });
                            
                            }}>Follow</button>
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