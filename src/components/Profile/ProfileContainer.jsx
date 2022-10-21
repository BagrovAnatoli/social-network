import React from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { connect } from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
            this.props.setUserProfile(response.data);
        });
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
    };
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));