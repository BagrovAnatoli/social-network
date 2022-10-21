import React from  'react';
import Header from  './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserData, setUserPhotoSmall } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(response => {
            // this.props.toggleIsFetching(false);
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                this.props.setUserData(id, email, login);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
                    this.props.setUserPhotoSmall(response.data.photos.small);
                });
            }
            
        });
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photoSmall: state.auth.photoSmall,
})

export default connect(mapStateToProps,{setUserData})(HeaderContainer);