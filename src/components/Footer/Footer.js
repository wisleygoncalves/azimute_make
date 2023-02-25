import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <ul>
          <li>
            <a href="/">
              <img src="/A_Make_White.png" alt="" />
            </a>
          </li>
          <li>&copy; 2023 Azimute Make</li>
        </ul>
      </div>
      <div className={styles.link_list}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to='/sobre-nos'>Conheça a gente</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Conheça nossos trabalhos</NavLink>
          </li>
          <li>
            <NavLink to="https://blog.azimute.com/" target='_blank'>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.socialMedia}>
        <p>Conheça nossas redes socias</p>
        <ul>
          <li>
            <NavLink to='https://www.instagram.com/azimutemake/' target="_blank">
              <i class="bi bi-instagram"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='https://github.com/wisleygoncalves' target="_blank">
              <i class="bi bi-github"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='https://www.linkedin.com/in/wisleygoncalves' target="_blank">
              <i class="bi bi-linkedin"></i>
            </NavLink>
          </li>
        </ul>
        <p className={styles.socialHelp}>Posso ajudar?</p>
        <ul>
          <li>
            <NavLink to='https://api.whatsapp.com/send?phone=5534999954606' target="_blank">
              <i class="bi bi-whatsapp"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='mailto:wisley.goncalvees@gmail.com' target="_blank">
              <i class="bi bi-envelope-fill"></i>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <p className={styles.contactTitle}>Fale conosco</p>
        <ul>
          <li>
            <p> <span>E-mail:</span> <NavLink to="mailto:wisley.goncalvees@gmail.com" target="_blank">wisley.goncalvees@gmail.com</NavLink></p>
          </li>
          <li>
            <p> <span>WhatsApp:</span> <NavLink to="https://api.whatsapp.com/send?phone=5534999954606" target="_blank">+55 34 99995-4606</NavLink> </p>
          </li>
          <li>
            <p> <span>LinkedIn:</span> <NavLink to="https://www.linkedin.com/in/wisleygoncalves" target="_blank">@wisleygoncalves</NavLink></p>
          </li>
        </ul>
      </div>
      <div className={styles.socialMediaMobile}>
        <ul>
        <li>
            <NavLink to='https://www.instagram.com/azimutemake/' target="_blank">
              <i class="bi bi-instagram"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='https://github.com/wisleygoncalves' target="_blank">
              <i class="bi bi-github"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='https://www.linkedin.com/in/wisleygoncalves' target="_blank">
              <i class="bi bi-linkedin"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='https://api.whatsapp.com/send?phone=5534999954606' target="_blank">
              <i class="bi bi-whatsapp"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='mailto:wisley.goncalvees@gmail.com' target="_blank">
              <i class="bi bi-envelope-fill"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer