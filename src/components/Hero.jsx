import React from 'react'

function Hero() {
    return (
        <section className="hero">
        <div className="content">
            <h1 className="description">Manage All Your Money in One App</h1>
            <p>We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="buttons">
                <a href="#" className="app-store"> <img src="src/assets/apple.svg" alt="" /></a>
                <a href="#" className="google-play"> <img src="src/assets/google.svg" alt="" /></a>
            </div>
        </div>
            <div className="hero-phones">
            <img src="src/assets/test.svg" alt="preview"/>
            </div> 
    </section>
)
}

export default Hero