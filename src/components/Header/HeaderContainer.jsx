import React from  'react';
import Header from  './Header';
import { connect } from 'react-redux';
import { setUserData, setUserPhotoSmall } from '../../redux/auth-reducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true);
        usersAPI.authMe().then(data => {
            // this.props.toggleIsFetching(false);
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                this.props.setUserData(id, email, login);
                usersAPI.getProfile(id).then(profileData => {
                    this.props.setUserPhotoSmall(profileData.photos.small);
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

export default connect(mapStateToProps,{setUserData, setUserPhotoSmall})(HeaderContainer);