import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator, getUserProfile } from '../../redux/profileReducer';
import React from 'react';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'
import { Navigate } from 'react-router-dom';

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };    
    return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {  
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {userId = 2;};
    this.props.getUserProfile(userId);
  }

  render() {
    if (this.props.isAuth === false) return <Navigate to="/login"/>;

    return (<>
      {this.props.isFetching ? <Preloader /> : null}
      <Profile profile={this.props.profile}/>
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,  
    isAuth: state.auth.isAuth,  
  }
}

export default connect(mapStateToProps, { updatePostActionCreator, addPostActionCreator, getUserProfile })(withRouter(ProfileContainer));