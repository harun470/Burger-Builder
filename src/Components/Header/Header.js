import React from 'react'
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import Logo from '../../assets/burger.png'
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div>
           <Navbar  style={{backgroundColor :'darkgrey', height:'70px'  }}>
              
             
                        <NavbarBrand href='/' className='mr-auto ml-md-5 Brand'>
                            <img src={Logo} alt='Logo' width='80px'/>
                        </NavbarBrand>
                        <Nav  className='mr-md-5'>
                            <NavItem>
                                <NavLink exact to='/' className='Navlink'>Burger</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to='/order' className='Navlink'>Order</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to='/login' className='Navlink'>Login</NavLink>
                            </NavItem>
                            
                        </Nav>
                           
           </Navbar> 
        </div>
    )
}
