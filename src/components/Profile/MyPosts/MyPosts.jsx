import React from "react";
import classes from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';
//import { postsData } from '../../../incData';

const MyPosts = (props) => {

    let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    return (        
        <div className={classes.postBlock}>
            <h3>Myposts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>send</button></div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div> 
        </div>           
    )
}

export default MyPosts;