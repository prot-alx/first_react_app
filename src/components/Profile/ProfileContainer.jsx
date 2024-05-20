import { connect } from 'react-redux';
import Profile from './Profile';
import { addPostActionCreator, updatePostActionCreator } from '../../redux/profileReducer';

let mapStateToProps = (state)=> {
    return {        
        profilePage: state.profilePage,
  }
}

const ProfileContainer = connect(mapStateToProps, {addPostActionCreator, updatePostActionCreator})(Profile);

export default ProfileContainer;