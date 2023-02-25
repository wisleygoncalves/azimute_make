import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './FrontEnd.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const FrontEnd = () => {
  window.scrollTo(0, 0)
  
  return (
    <div>
      <div
        className={styles.boxFrontEnd}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(/img/slide_front.jpg)'
        }}>
        <div className={styles.makeFrontEnd}
           data-aos="fade-in"
           data-aos-once="true">
            <div>
              <i class="bi bi-columns-gap"></i>
            </div>
            <center>
              <img src="/img/make_front.png" alt="" /></center>
            <center>
              <div className={styles.makeLineFront}></div>
            </center>
            <h2>Conheça os Principais Trabalhos!</h2>
        </div>
      </div>
      <div className={styles.box2FrontEnd}>
        <div 
          className={styles.imgFrontEnd}
          data-aos="fade-down"
          data-aos-once="true">
            <NavLink to="https://clone.wisleygoncalves.com/" target='_blank'>
            <img src="/img/netflix_clone.png" alt="" />
            </NavLink>
        </div>
        <div
          className={styles.imgFrontEnd}
          data-aos="fade-down"
          data-aos-once="true">
          <NavLink to="https://clima.wisleygoncalves.com/" target='_blank'>
            <img src="/img/clima_agora.png" alt="" />
          </NavLink>
        </div>
        <div
          className={styles.imgFrontEnd}
          data-aos="fade-down"
          data-aos-once="true">
          <NavLink to="https://imc.wisleygoncalves.com/" target='_blank'>
            <img src="/img/calculadora_imc.png" alt="" />
          </NavLink>
        </div>
        <div
          className={styles.imgFrontEnd}
          data-aos="fade-in"
          data-aos-once="true">
          <NavLink to="https://playermusic.wisleygoncalves.com/" target='_blank'>
            <img src="/img/player_music.png" alt="" />
          </NavLink>
        </div>
        <div
          className={styles.imgFrontEnd}
          data-aos="fade-in"
          data-aos-once="true">
          <NavLink to="https://secretword.wisleygoncalves.com/" target='_blank'>
            <img src="/img/secret_word.png" alt="" />
          </NavLink>
        </div>
        <div
          className={styles.imgFrontEnd}
          data-aos="fade-in"
          data-aos-once="true">
          <NavLink to="https://frontend.wisleygoncalves.com/" target='_blank'>
            <img src="/img/wg_skills.png" alt="" />
          </NavLink>
        </div>
        <div
          className={styles.imgFrontEnd}
          data-aos="fade-up"
          data-aos-once="true">
          <NavLink to="https://art.wisleygoncalves.com/" target='_blank'>
            <img src="/img/art.png" alt="" />
          </NavLink>
        </div>
        <div
          className={styles.imgFrontEnd}
          data-aos="fade-up"
          data-aos-once="true">
          <NavLink to="https://agency.wisleygoncalves.com/" target='_blank'>
            <img src="/img/agency.png" alt="" />
          </NavLink>
        </div>
        <div
          className={styles.imgFrontEnd}
          data-aos="fade-up"
          data-aos-once="true">
          <NavLink to="https://electrum.wisleygoncalves.com/" target='_blank'>
            <img src="/img/electrum.png" alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default FrontEnd