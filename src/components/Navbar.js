import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Heheszki</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown03"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Games</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown03">
                            <Link className="dropdown-item" to="/app/games">Lista</Link>
                            <Link className="dropdown-item" to="/app/products/new">Dodaj</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }


}

export default Navbar;
