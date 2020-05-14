import React from 'react';
import Paginator from '../../Common/Paginator/Paginator'
import User from './User'

let Users = ({currentPage, onPageChanged, totalItemsCount, pagesSize, ...props}) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalItemsCount / props.pagesSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <Paginator 
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalItemsCount}
            pagesSize={pagesSize}
            
        />
      
        {props.users.map(u => <User 
                                user={u}
                                key={u.id}
                                follow={props.follow}
                                unfollow={props.unfollow}
                                followingProgress={props.followingProgress}/>)
        }
    </div>
}

export default Users