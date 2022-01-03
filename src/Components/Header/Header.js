import React from 'react'
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import Logo from '../../assets/burger.png'
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps=(state)=>{
    
    return{
        token:state.token
    }
}

 const Header=(props) =>{
   
    let links=null;
    if(props.token===null){
        links=(
            <Nav  className='mr-md-5'>
                <NavItem>
                    <NavLink exact to='/login' className='Navlink'>Login</NavLink>
                </NavItem>
            </Nav>
        )
    }else{
        links=(
            <Nav  className='mr-md-5'>
            <NavItem>
                <NavLink exact to='/' className='Navlink'>Burger</NavLink>
            </NavItem>
            <NavItem>
                <NavLink exact to='/order' className='Navlink'>Order</NavLink>
            </NavItem>
            <NavItem>
                <NavLink exact to='/logout' className='Navlink'>Logout</NavLink>
            </NavItem>
            
            </Nav>
        )
    }
    return (
        <div>
           <Navbar  style={{backgroundColor :'darkgrey', height:'70px'  }}>
              
             
                        <NavbarBrand href='/' className='mr-auto ml-md-5 Brand'>
                            <img src={Logo} alt='Logo' width='80px'/>
                        </NavbarBrand>
                        {links}
                           
           </Navbar> 
        </div>
    )
}

export default connect(mapStateToProps) (Header);
