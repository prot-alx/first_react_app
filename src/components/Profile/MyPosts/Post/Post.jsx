import React from "react";
import classes from './Post.module.css';
import ava from './imgPostAvatars/1.webp';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={ava} alt="avatar"></img>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;