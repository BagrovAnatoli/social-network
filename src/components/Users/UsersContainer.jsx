import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer-2';
import Users from './Users';
import Loader from '../Loader/Loader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true,
        }).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    setCurrentPageHandler = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}`,{
            withCredentials: true,
        }).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
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
    };
};

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);