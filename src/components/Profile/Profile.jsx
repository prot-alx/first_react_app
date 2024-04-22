import React from "react";
import profileBackground from '../../img/background.jpg';
import avatarImage from '../../img/avatar.jpg';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.profileBackground} src={profileBackground} alt="background"/>
            </div>
            <div className={classes.userProfile}>
                <img className={classes.profileAvatar} src={avatarImage} alt="avatar"/>
                <div>
                    <div className={classes.profileName}>
                        <h3>Name</h3>
                    </div>
                    <div className={classes.profileStatus}>
                        <ul>
                            <li>дата</li>
                            <li>город</li>
                            <li>образование</li>
                            <li>веб сайт</li>
                        </ul>
                    </div>
                </div>
            </div>
           <MyPosts /> 
        </div> 
    )
}

export default Profile;