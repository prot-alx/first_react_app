import React, { Fragment, useState } from "react";
import styles from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';
import { ModalWindow } from './ModalText';


const MyPosts = (props) => {

    console.log(props);

    let state = props.props;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    let postsElements = state.postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        console.log('addpost clicked', state.newPostText)
        state.newPostText === '' ? alert('Enter some text') : state.addPostActionCreator();
    };

    let sendPostOnEnter = (e) => { if (e.key === "Enter") addPost() };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text)
        state.updatePostActionCreator();
    }

    return (
        <Fragment>
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div className={styles.textWrapper}>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} onKeyUp={sendPostOnEnter} />
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

export default MyPosts;