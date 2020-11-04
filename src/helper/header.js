import React from 'react'
import { Link } from 'react-router-dom';
import { Auth } from './Auth';
export const Header = () => {
    const onClickHandler = (next) => {
        localStorage.removeItem("tokenInternTheEGuardians");
        localStorage.removeItem("nameInternTheEGuardians");
        next();
    }
    return (
        <header className="newsHeader">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                <a className="navbar-brand" href="/">The E-Guardians</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={`${process.env.PUBLIC_URL}`}><a className="nav-link" href="">Home <span className="sr-only">(current)</span></a></Link>
                        </li>
                        {
                            Auth && <li className="nav-item" >
                               <a className="nav-link" href={`${process.env.PUBLIC_URL}/profile`}>My Profile</a>
                             </li>
                        }
                        <li className="nav-item">
                        <Link to={`${process.env.PUBLIC_URL}/about`}><a className="nav-link" href="">About us</a></Link>
                        </li>
                        {
                            Auth && <li className="nav-item" onClick={() => { onClickHandler(() => window.location.reload()) }}>
                               <a className="nav-link" href="">Logout</a>
                             </li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}