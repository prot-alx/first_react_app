import React from "react";
import userPhoto from '../../img/4c37ee25c50fe7f61ddc8858b0298042.jpg';
import styles from './Users.module.css';
import { NavLink } from "react-router-dom";

let Users = (props) => {   
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    //pages scroll
    let curP = props.currentPage;
    let curPF = ((curP - props.pageSize) < 0) ? 0 : curP - props.pageSize;
    let curPL = curP + props.pageSize;
    let slicedPages = pages.slice(curPF, curPL);
    //pages scroll

    return (
        <div>            
            <div className={styles.pagesList}>     
                <div className={`${props.currentPage === 1 ? styles.selectedPage : styles.nonselectedPage} ${styles.firstNlastPage}`} onClick={() => { props.onPageChanged(1) }}>First page</div>
                <div className={styles.pageNumbers}>   
                    {slicedPages.map(p => 
                        <span onClick={() => { props.onPageChanged(p) }} key={p} className={props.currentPage === p ? styles.selectedPage : styles.nonselectedPage}>{p}</span>
                    )}
                </div>      
                <div className={`${props.currentPage === pagesCount ? styles.selectedPage : styles.nonselectedPage} ${styles.firstNlastPage}`} onClick={() => { props.onPageChanged(pagesCount) }}>Last page</div>
            </div>
            <div className={styles.userStatuses}>
                {props.users.map(u => <div key={u.id} className={styles.userStatus}>                   
                    <span className={styles.block1}>
                        <div>
                            <NavLink to={'/profile/'+ u.id}> <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt='user ava' /> </NavLink> 
                        </div>
                        <div>
                            {u.followed
                                ? <button className={`${styles.unfollowButton} ${styles.fButton}`} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button className={`${styles.followButton} ${styles.fButton}`} onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span className={styles.block2}>
                        <span className={styles.userInfo}>
                            <div className={styles.userName}>{u.name}:</div>
                            <div className={styles.userStatusText}>{u.status != null ? u.status : 'some status text'}</div>
                        </span>
                        <span className={styles.location}>
                            <div className={styles.userCountry}>{'u.location.country'},</div>
                            <div className={styles.userCity}>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)}
            </div>
        </div>
    )
}

export default Users;