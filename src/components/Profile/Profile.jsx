import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) return <Preloader />;

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            {/* <MyPosts profilePage={props.profilePage}
                addPostActionCreator={props.addPostActionCreator}
                updatePostActionCreator={props.updatePostActionCreator}/> */}
        </div>
    )
}

export default Profile;