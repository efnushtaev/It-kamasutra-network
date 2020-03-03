import React from 'react';

let Post = (props) => {
    return (
        <div>
            <div>
                {props.message}
            </div>
            <div>
                {props.likesCount}
            </div>
            <hr />
        </div>
    )
}

export default Post;