import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { getAuthUserData } from "../../redux/authReducer";
import Preloader from '../Preloader/Preloader';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Header {...this.props} /></>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
});


export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);