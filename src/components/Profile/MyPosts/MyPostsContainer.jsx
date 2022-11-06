import { connect } from 'react-redux';
import { addPostCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => dispatch(addPostCreator(message)),
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;