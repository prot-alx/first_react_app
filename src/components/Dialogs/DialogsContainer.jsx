import { connect } from 'react-redux';
import Dialogs from './Dialogs'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessageActionCreator, updateNewMessageTextActionCreator})(Dialogs);

export default DialogsContainer;