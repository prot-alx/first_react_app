import React from "react";
import classes from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.newPostText === '' ? alert('Enter some text') : props.addPost();          
        //props.addPost(text);      
        props.updateNewPostText('');
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div className={classes.textWrapper}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost} >Send</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div> 
        </div>           
    )
}

export default MyPosts;