import './index.css';
import React, { useEffect } from 'react';

const Home = () => {
    
    useEffect(() => {
        document.body.classList.add('bg-home');
        const navBar = document.getElementById('Nav');
        navBar.classList.add('nav-home');
        const socialIcons = Array.from(
            document.getElementsByClassName('social-icon')
        );
        socialIcons.forEach( element => {
            element.style.color = '#C23AD8'
        })

        return (() => {
            document.body.classList.remove('bg-home');
            navBar.classList.remove('nav-home');
            socialIcons.forEach( element => {
            element.style.color = '#3B0444'
        })
        })
    })

    return (
        <section className="page-content">
            <div className="container">
                <section className="left-side">
                    <h1>Daniel <span>Daporta</span></h1>
                    <h2>Front-end <span>Developer</span></h2>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a front-end developer from Venezuela. I've always been a person who loves to learn. 2 years ago. I started self-learning the basics of front-end development in my free time while I was studying industrial engineering. Due to life circumstances, I had to drop out of university, but it was just an opportunity to continue the developer road, something I enjoy doing.<br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanks to the four years that I studied engineering, I have developed analysis skills suitable for a developer profile, results-oriented work, a well-built determination to achieve goals, and excellent communication skills. <br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I like to challenge myself and push the boundaries of my abilities, which has helped me grow at the same time professionally and personally. I am an ambitious person who always seeks new challenges and tries not to get complacent with what I already know. 
                    </p>
                    <button className='download-button'><a href="https://drive.google.com/file/d/1LI9fHpLiMqe4cCJFbRZTDQvlfPlVdrrJ/view?usp=share_link" target='_blank' rel='noopener noreferrer'>Download CV</a></button>
                </section>
                <section className="right-side">
                    <div></div>
                </section>
            </div>
        </section>
        
    )
}

export default Home;