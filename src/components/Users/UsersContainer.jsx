import React from 'react';
import { connect } from 'react-redux';
import { followThunkCreator, unfollowThunkCreator, setCurrentPage, getUsers } from '../../redux/users-reducer-2';
import Users from './Users';
import Loader from '../Loader/Loader';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPageHandler = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize);
    };

    render() {
        return <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setCurrentPageHandler={this.setCurrentPageHandler}
            // toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

const mapDispatchToProps = {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    setCurrentPage,
    getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(UsersContainer));