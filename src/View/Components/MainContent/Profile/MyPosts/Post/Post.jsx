import React from 'react';
import styles from './Post.module.scss';
import like from "../../../../../Images/like.svg";
import trash from "../../../../../Images/trash.svg";
import likeActive from "../../../../../Images/like_active.svg";

let Post = (props) => {
    const {profile} = props
    return (
        <div className={styles.container}>
            <div>
            {profile ? <img src={profile.photos.small}/> : ''}
            <span>{profile ? profile.fullName : ''}</span>
            <span>date</span>
            <img className={styles.trash} src={trash}/>
            </div>
            <div>
                {props.message}
            </div>
            <div>
                <span className={props.isLiked ? styles.likeIcon_active : styles.likeIcon}>{props.likesCount}</span><img src={props.isLiked ? likeActive : like}/>
            </div>
        </div>
    )
}

export default Post;