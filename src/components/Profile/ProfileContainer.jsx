import React from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
    Navigate
} from "react-router-dom";
import { connect } from 'react-redux';
import Profile from './Profile';
import { setProfile } from '../../redux/profile-reducer';

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
        this.props.setProfile(id);
    }


    render() {
        if ( !this.props.isAuth ) {
            return <Navigate replace to='/login'/>
        }

        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    };
}

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer));