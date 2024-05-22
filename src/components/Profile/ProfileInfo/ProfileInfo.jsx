import React from "react";
import profileBackground from '../../../img/background.jpg';
import avatarImage from '../../../img/avatar.jpg';
import styles from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props) return <Preloader />;
    return (
        <div>
            <div>
                <img className={styles.profileBackground} src={profileBackground} alt="background" />
            </div>
            <div className={styles.userProfile}>
                <div className={styles.profileName}>
                    <h3>{props.profile.fullName}</h3>
                </div>
                <div>
                    <img className={styles.profileAvatar} src={props.profile.photos.large ? props.profile.photos.large : avatarImage} alt="avatar" />
                </div>
                <div className={styles.profileInfo}>
                    <ul>Описание:
                        <li>Обо мне: {props.profile.aboutMe ? props.profile.aboutMe: <>Нет информации</>}</li>
                        <li>В поиске работы: {props.profile.lookingForAJob ? <>Да</> : <>Нет</>}</li>
                        <li>Описание: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : <>Нет информации</>} </li>
                    </ul>
                    <ul>Контакты: 
                        <li>Facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : <>Нет информации</>}</li>
                        <li>Github: {props.profile.contacts.github ? props.profile.contacts.github : <>Нет информации</>}</li>
                        <li>MainLink: {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : <>Нет информации</>}</li>
                        <li>Twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : <>Нет информации</>}</li>
                        <li>VK: {props.profile.contacts.vk ? props.profile.contacts.vk : <>Нет информации</>}</li>
                        <li>WebSite: {props.profile.contacts.website ? props.profile.contacts.website : <>Нет информации</>}</li>
                        <li>Youtube: {props.profile.contacts.youtube ? props.profile.contacts.youtube : <>Нет информации</>}</li>
                        <li>Instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : <>Нет информации</>}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;