import React from "react";
import profileBackground from '../img/background.jpg';
import avatarImage from '../img/avatar.jpg';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img className='profileBackground' src={profileBackground} alt="background"/>
            </div>
            <div className="userProfile">
                <img className='profileAvatar' src={avatarImage} alt="avatar"/>
                <div>+description</div>
            </div>
            <div>
                Myposts
            </div>
            <div>
                new post
            </div>
            <div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
                <div>
                    post3
                </div>
            </div>            
        </div> 
    )
}

export default Profile;