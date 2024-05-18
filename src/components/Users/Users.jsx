import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../img/4c37ee25c50fe7f61ddc8858b0298042.jpg'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        //pages scroll
        let curP = this.props.currentPage;
        let curPF = ((curP - this.props.pageSize) < 0) ? 0 : curP - this.props.pageSize;
        let curPL = curP + this.props.pageSize;
        let slicedPages = pages.slice(curPF, curPL);
        //pages scroll
        
        return (
            <div>
                <div className={styles.pagesList}>
                    {slicedPages.map(p => 
                        <span onClick={()=> { this.onPageChanged(p) }} key={p} className={this.props.currentPage === p ? styles.selectedPage : styles.nonselectedPage }>{p}</span>
                    )}
                </div>
                <div className={styles.userStatuses}>
                    {this.props.users.map(u =>
                        <div key={u.id} className={styles.userStatus}>
                            <span className={styles.block1}>
                                <div>
                                    <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt='user ava' />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button className={`${styles.unfollowButton} ${styles.fButton}`} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                        : <button className={`${styles.followButton} ${styles.fButton}`} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}

export default Users;