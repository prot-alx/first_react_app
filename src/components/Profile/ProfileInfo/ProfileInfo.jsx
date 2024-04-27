import React from "react";
import profileBackground from '../../../img/background.jpg';
import avatarImage from '../../../img/avatar.jpg';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.profileBackground} src={profileBackground} alt="background" />
            </div>

            <div className={classes.userProfile}>
                 <div className={classes.profileName}>
                    <h3>Name</h3>         
                </div>                
                <div>
                    <img className={classes.profileAvatar} src={avatarImage} alt="avatar" />
                </div>                
                <div className={classes.profileInfo}>
                    <ul>
                        <li>дата</li>
                        <li>город</li>
                        <li>образование</li>
                        <li>веб сайт</li>
                    </ul>
                </div>                
            </div>
        </div>
    )
}

export default ProfileInfo;