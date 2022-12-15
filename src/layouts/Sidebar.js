import React from 'react'
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="col-auto bg-primary min-vh-100 d-flex align-items-center justify-center px-4">
            <ul className="nav flex-column m-auto align-items-start px-4" id="menu">
                <li className="nav-item mb-3">
                    <NavLink to="home" className="nav-link align-middle px-0">
                        <i className="bi bi-list text-white fs-6"></i>
                        <span className="mx-2 text-white fs-6">Home</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-3">
                    <NavLink to="search" className="nav-link align-middle px-0">
                        <i className="bi bi-search text-white  fs-6"></i>
                        <span className="mx-2 text-white fs-6">Search</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-3">
                    <NavLink to="favourites" className="nav-link align-middle px-0">
                        <i className="bi bi-heart-fill text-white fs-6"></i>
                        <span className="mx-2 text-white fs-6">Favourites</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-3">
                    <NavLink to="playlists" className="nav-link align-middle px-0">
                        <i className="bi bi-file-music-fill text-white fs-6"></i>
                        <span className="mx-2 text-white fs-6">Playlists</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
