import React, { Fragment } from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    console.log(props)
    return (
        <Fragment>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                addPostActionCreator={props.addPostActionCreator}
                updatePostActionCreator={props.updatePostActionCreator}/>
        </Fragment>
    )
}

export default Profile;