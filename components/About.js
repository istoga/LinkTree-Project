import React from 'react';
import ReactDOM from 'react-dom/client';

export default function About() {
    return (
        <main>
            <div className="about-section">
                <div>
                    <img 
                        src = "../images/email.png"
                        height = {50}
                        width = {50}
                        alt = "email icon"
                    />
                    <h4>Get Tips</h4>
                </div>
                <div>
                    <img 
                        src = "../images/play-button.png"
                        height = {50}
                        width = {50}
                        alt = "play icon"
                    />
                    <h4>Tutorials</h4>
                </div>
                <div>
                    <img 
                        src = "../images/question.png"
                        height = {50}
                        width = {50}
                        alt = "question icon"
                    />
                    <h4>Ask Me</h4>
                </div>
            </div>
            <div className="link-section">
                <div>
                    <a href="https://www.google.com/" target="_blank">Google</a>
                </div>
                <div>
                    <a href="https://www.indeed.com/" target="_blank">Indeed</a>
                </div>
                <div>
                    <a href="https://stripe.com/" target="_blank">Downloads</a>
                </div>
            </div>
        </main>
    )
}