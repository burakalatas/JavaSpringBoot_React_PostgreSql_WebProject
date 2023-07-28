import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <Link to="/" style={{ color: "#91C8E4", fontSize: "16px" }} className="navbar-brand">CMV</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                    aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active ok" aria-current="page" href="x.html"
                                style={{ color: "#F6F4EB", fontSize: "16px" }}>
                                Haberler
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Announcement" className="nav-link active ok" aria-current="page" href="x.html"
                                style={{ color: "#F6F4EB", fontSize: "16px" }}>Duyurular</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;