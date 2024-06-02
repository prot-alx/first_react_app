import React, { useState } from "react";
import profileBackground from '../../../img/background.jpg';
import avatarImage from '../../../img/avatar.jpg';
import styles from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props) return <Preloader />;
    else {
        
        return (
            <div>
                <div>
                    <img className={styles.profileBackground} src={profileBackground} alt="background" />
                </div>
                <div className={styles.userProfile}>
                    <div className={styles.profileName}>
                        <h3>{props.profile.fullName}</h3>
                    </div>
                    <div className={styles.profileAvatar} >
                        <img src={props.profile.photos.large ? props.profile.photos.large : avatarImage} alt="avatar" />
                    </div>
                    <div className={styles.profileInfo}>
                        {!editMode &&
                            <div>
                                <span onDoubleClick={()=>setEditMode(true)}>asdasdasd</span>
                            </div>}
                        {editMode &&
                            <div>
                                <input autoFocus={true} onBlur={()=>setEditMode(false)}/>
                            </div>}
                        <ul>
                            <li><div className={styles.linksItem}>Обо мне:</div> <div>{props.profile.aboutMe ? props.profile.aboutMe : <>Нет информации</>}</div></li>
                            <li><div className={styles.linksItem}>В поиске работы:</div> <div>{props.profile.lookingForAJob ? <>Да</> : <>Нет</>}</div></li>
                            <li><div className={styles.linksItem}>Описание:</div> <div>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : <>Нет информации</>}</div></li>
                        </ul>
                        <ul>
                            <li><div className={styles.linksItem}>Facebook:</div> <div>{props.profile.contacts.facebook ? props.profile.contacts.facebook : <>Нет информации</>}</div> </li>
                            <li><div className={styles.linksItem}>Github:</div> <div>{props.profile.contacts.github ? props.profile.contacts.github : <>Нет информации</>}</div></li>
                            <li><div className={styles.linksItem}>MainLink:</div> <div>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : <>Нет информации</>}</div></li>
                            <li><div className={styles.linksItem}>Twitter:</div> <div>{props.profile.contacts.twitter ? props.profile.contacts.twitter : <>Нет информации</>}</div></li>
                            <li><div className={styles.linksItem}>VK:</div> <div>{props.profile.contacts.vk ? props.profile.contacts.vk : <>Нет информации</>}</div></li>
                            <li><div className={styles.linksItem}>WebSite:</div> <div>{props.profile.contacts.website ? props.profile.contacts.website : <>Нет информации</>}</div></li>
                            <li><div className={styles.linksItem}>Youtube:</div> <div>{props.profile.contacts.youtube ? props.profile.contacts.youtube : <>Нет информации</>}</div></li>
                            <li><div className={styles.linksItem}>Instagram:</div> <div>{props.profile.contacts.instagram ? props.profile.contacts.instagram : <>Нет информации</>}</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;