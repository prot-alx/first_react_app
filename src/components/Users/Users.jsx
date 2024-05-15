import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../img/4c37ee25c50fe7f61ddc8858b0298042.jpg'
let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
        
    }

    let userStatus = props.users.map( u => <div key={u.id} className={styles.userStatus}>
        <span className={styles.block1}>
            <div>
                <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt='user ava'/>
            </div>
            <div>
                {u.followed 
                ? <button className={styles.unfollowButton} onClick={()=> {props.unfollow(u.id)}}>Unfollow</button> 
                : <button className={styles.followButton} onClick={()=> {props.follow(u.id)}}>Follow</button>}
            </div>
        </span>
        <span className={styles.block2}>
            <span className={styles.userInfo}>
                <div className={styles.userName}>{u.name}:</div>
                <div className={styles.userStatusText}>{u.status != null ? u.status : 'some text KJHASKDJHKAJSD'}</div>
            </span>
            <span className={styles.location}>
                <div className={styles.userCountry}>{'u.location.country'},</div>
                <div className={styles.userCity}>{'u.location.city'}</div>
            </span>
        </span>
    </div>
    )

    return (
        <div className={styles.userStatuses}>
            {userStatus}
        </div>
    )
}

export default Users;