import React from "react";
import profileBackground from '../../../img/background.jpg';
import avatarImage from '../../../img/avatar.jpg';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={styles.profileBackground} src={profileBackground} alt="background" />
            </div>

            <div className={styles.userProfile}>
                 <div className={styles.profileName}>
                    <h3>Name</h3>         
                </div>                
                <div>
                    <img className={styles.profileAvatar} src={avatarImage} alt="avatar" />
                </div>                
                <div className={styles.profileInfo}>
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