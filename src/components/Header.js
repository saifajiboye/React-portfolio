import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';
import itcsLogo from '../app/assets/img/segun.png'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
            <Navbar dark color='primary' sticky='top' expand='md'>
               
                <NavbarBrand href='/'>
                    <img src={itcsLogo} alt='ITCS logo' />
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/directory'>
                                <i className='fa fa-list fa-lg' /> Directory
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>
                                <i className='fa fa-info fa-lg' /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-address-card fa-lg' /> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>   
            </Navbar>
    );
}
export default Header;