import React from 'react'
import Logo from '../../assets/icons_assets/Logo.svg';
import style from './style.module.css'
const Nav = () => {

  return (
    <nav className={style.navbar}>
        <ul  className={style.navbarList} >
            <img src={Logo}/>
            <a href="/"><li >Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/menu"><li>Menu</li></a>

            <a href="/reservations"><li>Reservations</li></a>

            <a href="/"><li>Order Online</li></a>
            <a href="/"><li>Login</li></a>

        </ul>
    </nav>   
  )
}

export default Nav