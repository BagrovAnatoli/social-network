import { connect } from 'react-redux';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        users: state.users,
        isAuth: state.auth.isAuth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newValue) => {
            dispatch(updateNewMessageTextCreator(newValue));
        },
        addMessage: () => {
            dispatch(addMessageCreator());
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;