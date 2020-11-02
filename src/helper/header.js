import React from 'react'
import { Auth } from './Auth';
export const Header = () => {
    const onClickHandler = (next) => {
        localStorage.removeItem("tokenInternTheEGuardians");
        localStorage.removeItem("nameInternTheEGuardians");
        next();
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                <a className="navbar-brand" href="/">The E-Guardians</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        {
                            Auth && <li className="nav-item" onClick={() => { onClickHandler(() => window.location.reload()) }}>
                               <a className="nav-link" href="#">Logout</a>
                             </li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}