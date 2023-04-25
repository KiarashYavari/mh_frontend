import React from 'react'
import './css/ProfileNav.css'

const ProfileNav = () => {
  return (
    <>
        <nav id="profile-nav" className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item" id="nav-dashboard">
                    <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Biling</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Statistics</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Setting</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <button className='btn btn-primary'>
                    Support
                    <span id="support-btn-badge" className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                        <span className="visually-hidden">Live</span>
                    </span>
                </button>
            </div>
    </nav>
    
    </>
  )
}

export default ProfileNav