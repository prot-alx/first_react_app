import React from "react";
import classes from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'Hi, how are you?', likesCount: 15, }, 
        { id: 2, message: 'helloooowoowowo', likesCount: 11, }, 
        { id: 3, message: '2342356', likesCount: 0, }, 
        { id: 4, message: '!!!!!223213', likesCount: 2, }, 
        { id: 5, message: '&&&^^^^!!!!222', likesCount: 5, }
    ];
    
    let postsElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

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