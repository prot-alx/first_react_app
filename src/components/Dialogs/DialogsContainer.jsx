import { connect } from 'react-redux';
import Dialogs from './Dialogs'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: () => {dispatch(addMessageActionCreator())},
        updateNewMessageTextActionCreator: (text) => {dispatch(updateNewMessageTextActionCreator(text))},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;