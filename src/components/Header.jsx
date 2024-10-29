import React from 'react'

function header() {
    return (
        <header className="topbar">
        <div className="logo"> <img src="src/assets/Silicon.svg" alt="" />
        </div>
        <nav id="main-menu" className="navbar">
            <a className="nav-link" href="#">features</a>
        </nav>
        <label className="switch">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
        </label>
        
        <a id="auth-signin" href="#" className="btn-primary">
            <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
        </a>
</header>
)
}

export default header