import React, { Fragment } from "react";
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