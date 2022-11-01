import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <>
            <ProfileInfo
                profile={props.profile}
                profileStatus={props.profileStatus}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </>
    );
}

export default Profile;