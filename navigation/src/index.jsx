import React from 'react';
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const Nav = ({loginStatus}) =>{

    return(
        <div className="links">
            {
            loginStatus ?
            <ul>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/sign_out">Sign out</NavLink>
                </li>
                <li>
                    <NavLink to="/new_ticket">Create new ticket</NavLink>
                </li>
            </ul>
            :
            (
            <ul>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            </ul>
            )
            }
      </div>
    )
}

export default Nav;

if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(<Nav />, document.getElementById('root'));
  }