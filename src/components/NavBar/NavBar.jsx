import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/new-mailbox">New Mailbox</NavLink>
                <NavLink to="/mailboxes">Mailboxes</NavLink>
            </div>
        </div>
    );
};

export default NavBar;