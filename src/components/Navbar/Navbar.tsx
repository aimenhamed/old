import React from 'react';
import { NavLink }  from 'react-router-dom';
import { Nav, NavbarContainer, NavItem, NavbarMenu } from './Navbar.styles';

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavbarMenu>
                    <NavItem>
                        <NavLink exact to="/" activeClassName='active' className="norm">
                            home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/about" activeClassName='active' className="norm">
                            about
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/projects" activeClassName='active' className="norm">
                            projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/experience" activeClassName='active' className="norm">
                            experience
                        </NavLink>
                    </NavItem>
                </NavbarMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar