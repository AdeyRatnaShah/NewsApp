import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
return (
    <>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
    <NavLink style={{color:'black',textDecoration:'none',fontSize:'20px'}} className="navbar-brand" to="#">NewsApp</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
        <NavLink className="nav-link lin"  aria-current="page" to="/">General</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link lin"  aria-current="page" to="/business">Business</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link lin"  aria-current="page" to="/entertainment">Entertainment</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link lin"  aria-current="page" to="/health">Health</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link lin"  aria-current="page" to="/science">Science</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link lin"  aria-current="page" to="/sports">Sports</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link lin"  aria-current="page" to="/technology">Technology</NavLink>
    </li>      
        
    </ul>
    </div>
</div>
</nav>
    </>
)
}

export default Navbar
