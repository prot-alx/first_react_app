import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {        
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessageActionCreator, updateNewMessageTextActionCreator}),
)(Dialogs);