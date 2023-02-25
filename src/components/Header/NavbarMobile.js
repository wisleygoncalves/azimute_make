import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'rsuite';

import styles from './NavbarMobile.module.css'


const NavbarMobile = ({black}) => {

  const dropDownRef = useRef(null)
  const [menuActive, setMenuActive] = useState(false)
  const onClick = () => setMenuActive(!menuActive)

  return (
    <div className={styles.menuMobile}>
    <header className={black ? 'black' : ''}>
      <NavLink to='/' target='_top'>
        <div className={styles.brand}>
          <img src="/Azimute_White.png" alt="" />
        </div>
      </NavLink>
      <div className={styles.menuContainer}>
        <button
          onClick={onClick}
          className={`menuOpen ${menuActive ? 'active' : 'inactive'}`}>
          <div className={styles.iconeMenu}><i class="bi bi-list"></i></div>
        </button>
        <button
          onClick={onClick}
          className={`menuClose ${menuActive ? 'active' : 'inactive'}`}>
          <div className={styles.iconeMenu}><i class="bi bi-x"></i></div>
        </button>
        <div
          ref={dropDownRef}
          className={`menu ${menuActive ? 'active' : 'inactive'}`}>
          <div className={styles.listMenu}>
          <ul className={styles.listMneuMobile}>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? styles.active : "")}>
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sobre-nos'
                className={({ isActive }) => (isActive ? styles.active : "")}>
                  Sobre Nós
              </NavLink>
            </li>
            <li>
              <div className={styles.dropdownMenu}>
                <Dropdown title="Soluções Make">
                   <div className={styles.dropMake}>
                   <Dropdown.Item>
                      <NavLink to='/make-frontend'>
                        <div className={styles.dropItems}>
                          <div className={styles.frontEnd}>
                            <p><span><i class="bi bi-columns-gap"></i></span> Make Front End</p>
                          </div>
                        </div>
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to='/lancamentos'>
                        <div className={styles.dropItems}>
                          <div className={styles.backEnd}>
                            <p><span><i class="bi bi-back"></i></span> Make Back End</p>
                          </div>
                        </div>
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to='/lancamentos'>
                        <div className={styles.dropItems}>
                          <div className={styles.fullStack}>
                            <p><span>  <i class="bi bi-box"></i></span> Make Full Stack</p>
                          </div>
                        </div>
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to='/lancamentos'>
                        <div className={styles.dropItems}>
                          <div className={styles.data}>
                            <p><span><i class="bi bi-activity"></i></span> Make Data</p>
                          </div>
                        </div>
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to='/lancamentos'>
                        <div className={styles.dropItems}>
                          <div className={styles.mobile}>
                            <p><span><i class="bi bi-phone"></i></span> Make Mobile</p>
                          </div>
                        </div>
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to='/lancamentos'>
                        <div className={styles.dropItems}>
                          <div className={styles.digital}>
                            <p><span><i class="bi bi-chat"></i></span> Make Digital</p>
                          </div>
                        </div>
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to='/lancamentos'>
                        <div className={styles.dropItems}>
                          <div className={styles.devops}>
                            <p><span><i class="bi bi-hdd"></i></span> Make Devops</p>
                          </div>
                        </div>
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to='/lancamentos'>
                        <div className={styles.dropItems}>
                          <div className={styles.ia}>
                            <p><span><i class="bi bi-robot"></i></span> Make IA</p>
                          </div>
                        </div>
                      </NavLink>
                    </Dropdown.Item>
                   </div>
                </Dropdown>
              </div>
            </li>
            <li>
              <NavLink
                to='/portfolio'
                className={({ isActive }) => (isActive ? styles.active : "")}>
                  Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to='https://blog.azimute.com/'
                target='_blank'
                className={({ isActive }) => (isActive ? styles.active : "")}>
                  Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contato'
                className={({ isActive }) => (isActive ? styles.active : "")}>
                  Contato
              </NavLink>
            </li>
            <li>
              <NavLink
                to='https://crm.azimute.com/'
                target='_blank'
                className={({ isActive }) => (isActive ? styles.active : "")}>
                  <p><span><i class="bi bi-person"></i></span>  Área de Cliente</p>
              </NavLink>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default NavbarMobile