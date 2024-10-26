import React from 'react'

function header() {
    return (
        <header class="topbar">
        <div class="logo"> <img src="src/assets/Silicon.svg" alt="" />
        </div>
        <nav id="main-menu" class="navbar">
            <a class="nav-link" href="#">features</a>
        </nav>
        <label class="switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
        </label>
        
        <a id="auth-signin" href="#" class="btn-primary">
            <i class="fa-regular fa-user"></i>
            <span>Sign in / up</span>
        </a>
</header>
)
}

export default header