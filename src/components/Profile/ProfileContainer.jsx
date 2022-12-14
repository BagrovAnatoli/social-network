import React from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';
import Profile from './Profile';
import { setProfile, getStatus, updateStatus } from '../../redux/profile-reducer';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.router.params.id;
        if(!id) {id = 26276;}
        this.props.getStatus(id);
        this.props.setProfile(id);
    }


    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus,
    };
}

export default compose(
    connect(mapStateToProps, {setProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);