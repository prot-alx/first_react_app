import { connect } from 'react-redux';
import Dialogs from './Dialogs'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'

let mapStateToProps = (state) => {
    return {        
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessageActionCreator, updateNewMessageTextActionCreator})(Dialogs);

export default DialogsContainer;