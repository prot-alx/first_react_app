import React from "react";
import classes from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = () => {
    return (        
        <div className={classes.postBlock}>
            <h3>Myposts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>send</button></div>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, how are you?" like="15"/>
                <Post message="helloooowoowowo" like="10"/>
            </div> 
        </div>           
    )
}

export default MyPosts;