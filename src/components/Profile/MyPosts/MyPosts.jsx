import React from "react";
import classes from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);

    return (        
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div className={classes.textWrapper}><textarea></textarea></div>
                <div><button>Send</button></div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div> 
        </div>           
    )
}

export default MyPosts;