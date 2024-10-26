import React from 'react'

function Hero() {
    return (
        <section class="hero">
        <div class="content">
            <h1 class="description">Manage All Your Money in One App</h1>
            <p>We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
            <div class="buttons">
                <a href="#" class="app-store"> <img src="src/assets/apple.svg" alt="" /></a>
                <a href="#" class="google-play"> <img src="src/assets/google.svg" alt="" /></a>
            </div>
        </div>
            <div class="hero-phones">
            <img src="src/assets/test.svg" alt="preview"/>
            </div> 
    </section>
)
}

export default Hero