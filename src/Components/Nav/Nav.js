import React from 'react'
import Logo from '../../assets/icons_assets/Logo.svg';
import style from './style.module.css';
import { Link } from 'react-router-dom';
const Nav = () => {

  return (
    <>
    <nav className='container p-4'>
        <ul  className={style.navbarList} >
            <img src={Logo}/>
            <a><li >Home</li></a>
            <a ><li>About</li></a>
            <a ><li>Menu</li></a>

            <a ><li>Reservations</li></a>

            <Link to={'/booking'}  style={{backgroundColor:' #495E57'}}><li style={{color:'white'}}>Order Online</li></Link>
            <a ><li>Login</li></a>
        </ul>
    </nav>   
   
  </>
  )
}

export default Nav