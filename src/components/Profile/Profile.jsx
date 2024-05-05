import React, { Fragment } from "react";
//import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <Fragment>
            <ProfileInfo />            
            <MyPosts postsData={props.profilePage.postsData} 
                     addPost={props.addPost} 
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profilePage.newPostText}/> 
        </Fragment> 
    )
}

export default Profile;