import React from "react";
import classes from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'Hi, how are you?', likesCount: 15, }, 
        { id: 2, message: 'helloooowoowowo', likesCount: 11, }, 
        { id: 3, message: '2342356' }, 
        { id: 4, message: '!!!!!223213' }, 
        { id: 5, message: '&&&^^^^!!!!222' }
    ];

    return (        
        <div className={classes.postBlock}>
            <h3>Myposts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>send</button></div>
            </div>
            <div className={classes.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post {...postsData[1]}/>
            </div> 
        </div>           
    )
}

export default MyPosts;