import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) return <Preloader />;
    
    return (
        <div>
            <ProfileInfo 
                aboutMe={props.profile.aboutMe} 
                contacts={props.profile.contacts} 
                fullName={props.profile.fullName}
                lookingForAJob={props.profile.lookingForAJob}
                lookingForAJobDescription={props.profile.lookingForAJobDescription}
                photos={props.profile.photos}
                userId={props.profile.userId}
                />
            {/* <MyPosts profilePage={props.profilePage}
                addPostActionCreator={props.addPostActionCreator}
                updatePostActionCreator={props.updatePostActionCreator}/> */}
        </div>
    )
}

export default Profile;