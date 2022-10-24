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
        <div className="page-content">
            <section className="left-side">
                <h1>Daniel <span>Daporta</span></h1>
                <p>
                    I am a 31 yo front-end developer from Venezuela. I started my journey as a self-taught developer and learned the basics of programming languages like HTML, CSS, and JavaScript. Right now, I am enrolled in a BootCamp to become a full-stack developer and polish my already acquired skills. <br /><br />

                    I am ready to take on a new challenge. I feel that to go further. You have to push yourself through situations where: Your capabilities will be on the exercise, and you have to explore new methods to sort the obstacles. I consider being part of a work team helps share information and learn something new.

                </p>
                <button className='download-button'>Download CV</button>
            </section>
            <section className="right-side">
                <img src={require('./images/Photo.png')} alt="photo" />
            </section>
        </div>
        
    )
}

export default Home;