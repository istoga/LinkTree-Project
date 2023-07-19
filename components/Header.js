import React from 'react';
import ReactDOM from 'react-dom/client';
import profile from "../images/woman.jpg"

export default function Header() {
    return (
        <>
            <img
                src = {profile}
                height = {75}
                width = {75}
                className = "profile-img"
                alt = "woman looking at camera"
            />
            <p className="intro">@blackcodergirl</p>
            <h4>Helping other black women become coders!</h4>
        </>
    )
}