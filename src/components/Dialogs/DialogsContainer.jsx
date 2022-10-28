import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import withAuthRedirect from '../../hoc/withAuthRedirect';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        users: state.users,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);