import React from 'react';
import { NavLink } from 'react-router-dom';

let User = ({user, follow, unfollow, followingProgress}) => {
    return <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null
                        ? user.photos.small 
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMcHp3yfT5tduDCfT-Raz6u0N1x4BWBbb2OCwKMN2sqyoEBXM_'} />
                    </NavLink>
                </div>
                <div>{   
                    user.followed 
                    ? <button disabled={followingProgress.some(e => e === user.id)} onClick={() => { 
                    unfollow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={followingProgress.some(e => e === user.id)} onClick={() => {
                    follow(user.id)
                    }}>follow</button>}
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
            </span>
        </div>
}

export default User