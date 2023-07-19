import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Footer() {
    return (
        <footer>
            <div>
                <img 
                    src = "../images/facebook.png"
                    height = {25}
                    width = {25}
                    alt = "facebook icon"
                />
            </div>
            <div>
                <img 
                    src = "../images/instagram.png"
                    height = {25}
                    width = {25}
                    alt = "instagram icon"
                    />
                </div>
            <div>
                <img 
                    src = "../images/youtube.png"
                    height = {25}
                    width = {25}
                    alt = "youtube icon"
                    />
                </div>
        </footer>
    )
}