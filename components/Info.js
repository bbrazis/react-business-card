import React from 'react'

export default function Info() {
    return (
        <section>
            <div className="info-img--wrapper">
                <img src="./images/profile-pic--tiny.jpg" alt="portrait of Bradley Brazis wearing a blue button-up shirt" />
            </div>
            <div className="info-title--info">
                <h1>Bradley Brazis</h1>
                <h2 className="subheading">Frontend Developer</h2>
                <a href="https://www.bbrazis.com" target="_blank" >bbrazis.com</a>
            </div>
            <div className="info-connect--wrapper">
                <a href="mailto:bradley.brazis+reactbc@gmail.com" target="_blank" className="mail-link">
                    <img src="./images/Mail.svg" alt="mail icon" className="link-icon"/>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/bradleybrazis" target="_blank" className="linkedin-link">
                    <img src="./images/linkedin.svg" alt="mail icon" className="link-icon"/>
                    LinkedIn
                </a>
            </div>
        </section>
    )
}