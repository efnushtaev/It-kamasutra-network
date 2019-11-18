import React from 'react';
import FriendItem from './FriendsItem/FriendItem';
import classes from './myFriends.module.scss';

const MyFriends = (props) => {

    let friendItem = props.state.friendItem.map(f => <FriendItem  id={f.id} name={f.name} ava={f.ava} />)
    return (
        <div className={classes.container}>
            <ul className={classes.list}>
                {friendItem}
            </ul>
        </div>
    )
}

export default MyFriends;