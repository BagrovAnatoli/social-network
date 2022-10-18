import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/users-reducer-2';
import Users from './Users';
import Loader from '../Loader/Loader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
        // setTimeout(()=>{
        //     const data = JSON.parse(mockUsers);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // },2000);
    }

    setCurrentPageHandler = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}`).then(response => {
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

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(followAC(id)),
        unfollow: (id) => dispatch(unfollowAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);