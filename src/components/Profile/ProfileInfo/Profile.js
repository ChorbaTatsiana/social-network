import React from "react";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from './../MyPosts/Post/MyPostsContainer'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
