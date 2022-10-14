import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer-2';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(followAC(id)),
        unfollow: (id) => dispatch(unfollowAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users)),
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;