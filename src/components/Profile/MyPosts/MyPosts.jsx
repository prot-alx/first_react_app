import React, { Fragment, useState } from "react";
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';
import { ModalWindow } from './ModalText';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer';
import StoreContext from "../../../StoreContext";

const MyPosts = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        
        <StoreContext.Consumer>
            {
                (store) => {     

                    let postsElements = store.getState().profilePage.postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id} />);
                
                    let newPostElement = React.createRef();
                
                    let addPost = () => {
                        store.getState().newPostText === '' ? alert('Enter some text') : store.dispatch(addPostActionCreator());
                    };
                
                    let onPostChange = () => {                        
                        let text = newPostElement.current.value;
                        let action = updatePostActionCreator(text)                        
                        store.dispatch(action);
                    }
                
                    let sendPostOnEnter = (e) => { if (e.key === "Enter") addPost() };
                    return (
                        <Fragment>
                            <div className={styles.postBlock}>
                                <h3>My posts</h3>
                                <div>
                                    <div className={styles.textWrapper}>
                                        <textarea onChange={onPostChange} ref={newPostElement} value={store.getState().profilePage.newPostText} onKeyUp={sendPostOnEnter} />
                                    </div>
                                    <div>
                                        <button onClick={addPost}>Send</button>
                                        <button onClick={() => setModalIsOpen(true)}>test</button>
                                    </div>
                                </div>
                                <div className={styles.posts}>
                                    {postsElements}
                                </div>
                            </div>
                            <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
                        </Fragment>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPosts;