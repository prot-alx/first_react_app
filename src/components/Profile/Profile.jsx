import React, { Fragment } from "react";
//import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (        
        <Fragment>
            <ProfileInfo />            
            <MyPosts props={props}/> 
        </Fragment> 
    )
}

export default Profile;