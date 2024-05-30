import { connect } from 'react-redux';
import {follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers} from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";
import Preloader from '../Preloader/Preloader'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return ( <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}                
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}                
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingInProgress}  
                followingInProgress={this.props.followingInProgress}              
            />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers})(UsersContainer);