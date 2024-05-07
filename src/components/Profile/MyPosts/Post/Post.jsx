import React from "react";
import styles from './Post.module.css';
import ava from './imgPostAvatars/1.webp';

const Post = (props) => {
    return (
        <div>
            <div className={styles.item}>
                <img src={ava} alt="avatar"></img>
                <div className={styles.text}>
                    {props.message}
                </div>
                <div>
                    <span className={styles.likes}>Likes: {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;