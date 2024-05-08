import React, { Fragment, useState } from "react";
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';
import { ModalWindow } from './ModalText';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.newPostText === '' ? alert('Enter some text') : props.dispatch(addPostActionCreator());         
    };

    let onPostChange = () => {    
        let text = newPostElement.current.value;
        let action = updatePostActionCreator(text)
        props.dispatch(action);
    }

    return (
        <Fragment>            
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div className={styles.textWrapper}>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost} >Send</button>
                        <button onClick={()=>setModalIsOpen(true)}>test</button>
                    </div>
                </div>
                <div className={styles.posts}>
                    {postsElements}
                </div> 
            </div>
            <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
        </Fragment>        
    )
}

export default MyPosts;