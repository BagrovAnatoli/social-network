import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
}

const mapDispatchToProps = () => {
    return {};
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;