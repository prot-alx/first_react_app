import React, { Fragment } from "react";
//import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (        
        <Fragment>
            <ProfileInfo />            
            <MyPosts /> 
        </Fragment> 
    )
}

export default Profile;