import { connect } from 'react-redux';
import Profile from './Profile';
import { addPostActionCreator, updatePostActionCreator } from '../../redux/profileReducer';

let mapStateToProps = (state)=> {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData,
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => {dispatch(addPostActionCreator())},
        updatePostActionCreator: (text) => {dispatch(updatePostActionCreator(text))},
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;