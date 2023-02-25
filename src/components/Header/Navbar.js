import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

// Items do Menu
import { menuItems } from './ItemsMenu';
import MenuItems from './MenuItems';

const Navbar = ({black}) => {
  return (
      <div className={styles.menuDesktop}>
      <nav className={black ? 'black' : ''}>
      <NavLink to='/'>
        <img src="/Azimute_White.png" alt="" />
      </NavLink>
      <ul className={styles.menu}>
       {menuItems.map((menu, index) => {
        const depthLevel = 0
        return <MenuItems 
          items={menu}
          key={index}
          depthLevel={depthLevel}
        />
       })}
      </ul>
      </nav>
    </div>
  )
}

export default Navbar