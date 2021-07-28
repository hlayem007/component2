import React from 'react'
import Picture from "./Pic.jpg";
import './profile.css'
const ProfilePic = () => {
    return (
        <div>
            <img src={Picture} alt="Mypic" />
        </div>
    )
}

export default ProfilePic