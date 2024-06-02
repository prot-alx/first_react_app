import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator, getUserProfile } from '../../redux/profileReducer';
import React from 'react';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

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
    return (<>
      {this.props.isFetching ? <Preloader /> : null}
      <Profile profile={this.props.profile}/>
      </>
    )
  }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  }
}

export default compose(
  connect(mapStateToProps, { updatePostActionCreator, addPostActionCreator, getUserProfile }),
  withRouter,
  withAuthRedirect, 
)(ProfileContainer);
