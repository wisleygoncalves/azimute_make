import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';

import Dropdow from './Dropdow'

import styles from './MenuItems.module.css'

const MenuItems = ( {items, depthLevel} ) => {
  const [dropdow, setDropdown] = useState(false)
  
  let ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if(dropdow && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdow])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  return (
    <li
      className={styles.menu-items}
      ref = {ref}
      onMouseEnter = {onMouseEnter}
      onMouseLeave = {onMouseLeave} >
      {
        items.submenu ? (<>
          <button
            type = 'button'
            aria-haspopup = 'menu'
            aria-expanded = {
              dropdow ? 'true' : 'false'
            }
            onClick = {
              () => setDropdown((prev) => !prev)
            }>
              {items.title}
              {""}
              { depthLevel > 0 ? < span > & raquo; </span> : <span className={styles.arrow}/>}
          </button>
          <
            Dropdow depthLevel = {
              depthLevel
            }
            submenus = {
              items.submenu
            }
            dropdown = {
              dropdow
            }
          />
        </>) : (
          <NavLink
          to={items.link}
          target={items.target}
          className={({ isActive }) => (isActive ? styles.active : "")}>
            {items.title}
          </NavLink>
        )
      }
    </li>
  )
}

export default MenuItems