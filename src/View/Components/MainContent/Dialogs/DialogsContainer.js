import {
    updatingBodyMessage,
    postNewMessage
} from '../../../../redux/reducer/dialogPage-reducer';
import Dialogs from './Dialogs';
import {
    connect
} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
        newMessageText: state.dialogPage.newMessageText
    }
};

export default connect(mapStateToProps, {
    postNewMessage,
    updatingBodyMessage
})(Dialogs);;