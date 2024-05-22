import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator, setUserProfile } from '../../redux/profileReducer';
import React from 'react';
import Profile from './Profile';
import axios from "axios";


class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
          this.props.setUserProfile(response.data);
        });
  }

  render() {
    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, {setUserProfile, updatePostActionCreator, addPostActionCreator})(ProfileContainer);