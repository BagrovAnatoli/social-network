import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostCreator()),
        updateNewPostText: (newValue) => dispatch(updateNewPostTextCreator(newValue)),
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;