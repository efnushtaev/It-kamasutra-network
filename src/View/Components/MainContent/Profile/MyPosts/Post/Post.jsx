import React from 'react';
import classes from './Post.module.css';

let Post = (props) => {
    return (
            <div>
    
                <div>
                    {props.message}
                </div>
                <div>
                   {props.likesCount}
                </div>
                <hr/>
            </div>
    )
}

export default Post;