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
                    <h3>{props.fullName}</h3>
                </div>
                <div>
                    <img className={styles.profileAvatar} src={props.photos.large ? props.photos.large : avatarImage} alt="avatar" />
                </div>
                <div className={styles.profileInfo}>
                    <ul>
                        <li>Обо мне: {props.aboutMe ? props.aboutMe: <>Нет информации</>}</li>
                        <li>В поиске работы: {props.lookingForAJob ? <>Да</> : <>Нет</>}</li>
                        <li>Описание: {props.lookingForAJobDescription ? props.lookingForAJobDescription : <>Нет информации</>} </li>
                    </ul>
                    <ul>Контакты: 
                        <li>Facebook: {props.contacts.facebook ? props.contacts.facebook : <>Нет информации</>}</li>
                        <li>Github: {props.contacts.github ? props.contacts.github : <>Нет информации</>}</li>
                        <li>MainLink: {props.contacts.mainLink ? props.contacts.mainLink : <>Нет информации</>}</li>
                        <li>Twitter: {props.contacts.twitter ? props.contacts.twitter : <>Нет информации</>}</li>
                        <li>VK: {props.contacts.vk ? props.contacts.vk : <>Нет информации</>}</li>
                        <li>WebSite: {props.contacts.website ? props.contacts.website : <>Нет информации</>}</li>
                        <li>Youtube: {props.contacts.youtube ? props.contacts.youtube : <>Нет информации</>}</li>
                        <li>Instagram: {props.contacts.instagram ? props.contacts.instagram : <>Нет информации</>}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;