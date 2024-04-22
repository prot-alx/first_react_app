import React from "react";
//import classes from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = () => {
    return (        
        <div>
            Myposts        
            <div>
                <textarea name="" id="" cols="1" rows="3"></textarea>
                <button>send</button>
            </div>
            <div>
                <Post message="Hi, how are you?" like="15"/>
                <Post message="helloooowoowowo" like="10"/>
            </div> 
        </div>           
    )
}

export default MyPosts;