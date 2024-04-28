import React from "react";
import classes from './Post.module.css';
import ava from './imgPostAvatars/1.webp';

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src={ava} alt="avatar"></img>
                <div className={classes.text}>
                    {props.message}
                </div>
                <div>
                    <span className={classes.likes}>Likes: {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;