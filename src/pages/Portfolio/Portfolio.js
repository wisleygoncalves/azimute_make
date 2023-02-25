import React from 'react'
import { NavLink } from 'react-router-dom';


import styles from './Portfolio.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Portfolio = () => {
  window.scrollTo(0, 0)
  
  return (
    <div>
      <div
        className={styles.boxPortfolio1}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(/img/bg_portfolio_1.jpg)'
        }}>
        <h1
          data-aos="fade-in"
          data-aos-once="true">
            Veja os projetos feito pela Azimute Make
        </h1>
        <div
          data-aos="fade-in"
          data-aos-once="true"
          className={styles.portfoilioLine}>
        </div>
        <p
          data-aos="fade-in"
          data-aos-once="true">
            Conheça os principais trabalhos desenvolvidos pelo nosso time Maker
        </p>
      </div>
      <div className={styles.boxPortfolio2}>
        <div className={styles.textPortfolio}
          data-aos="fade-up"
          data-aos-once="true">
          <h1>Conheça nossos principais trabalhos</h1>
          <p>A Azimute Make atua com diferentes aplicações de TI e Marketing.</p>
          <p><b>Clique abaixo</b> para saber mais sobre cada uma delas.</p>
        </div>
        <div>
          <ul
            className={styles.makePortfolio}
            data-aos="fade-up"
            data-aos-once="true">
            <li>
              <div className={styles.frontEnd}>
                <NavLink to='/front-end'>
                  <div><i class="bi bi-columns-gap"></i></div>
                  <img src="/img/make_front.png" alt="" />
                  <p>Criação de sites e outras interfaces, com as linguagens e frameworks mais modernas do mercado.</p>
                </NavLink>
              </div>
              <div className={styles.backEnd}>
                <NavLink to='#'>
                  <div><i class="bi bi-back"></i></div>
                  <img src="/img/make_back.png" alt="" />
                  <p>Criação de sites, lojas virtuais e marketplaces; sistemas de gestão web; API e; automação com robôs.</p>
                </NavLink>
              </div>
            </li>
            <li>
              <div className={styles.fullStack}>
                <NavLink to='#'>
                  <div><i class="bi bi-box"></i></div>
                  <img src="/img/make_full.png" alt="" />
                  <p>Criação de aplicações web; sistemas web; microserviços e; automatização com robôs utilizando Python.</p>
                </NavLink>
              </div>
              <div className={styles.data}>
                <NavLink to='#'>
                  <div><i class="bi bi-activity"></i></div>
                  <img src="/img/make_data.png" alt="" />
                  <p>Serviços com banco de dados; Análise de Dados e Machine Learning;  Big Data; BI com Power BI e Excel.</p>
                </NavLink>
              </div>
            </li>
            <li>
              <div className={styles.mobile}>
                <NavLink to='#'>
                  <div><i class="bi bi-phone"></i></div>
                  <img src="/img/make_mobile.png" alt="" />
                  <p>Desenvolvimento de aplicativos em Android e IOS, com as linguagens nativas e frameworks mais modernos.</p>
                </NavLink>
              </div>
              <div className={styles.digital}>
                <NavLink to='#'>
                  <div><i class="bi bi-chat"></i></div>
                  <img src="/img/make_digital.png" alt="" />
                  <p>Desenvolvimento de Growth Marketing de A a Z, desde a estrutura, planejamento e excecução.</p>
                </NavLink>
              </div>
            </li>
            <li>
              <div className={styles.devops}>
                <NavLink to='#'>
                  <div><i class="bi bi-hdd"></i></div>
                  <img src="/img/make_devops.png" alt="" />
                  <p>Soluções de A e Z de infraestrutura de servidores, desde o gerencimanto a soluções de deploy automático.</p>
                </NavLink>
              </div>
              <div className={styles.ia}>
                <NavLink to='#'>
                  <div><i class="bi bi-robot"></i></div>
                  <img src="/img/make_ia.png" alt="" />
                  <p>Otimização e automatização de negócios e empresas com soluções de Inteligência de Artificial.</p>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={styles.ctaPortfolio}
          data-aos="fade-up"
          data-aos-once="true">
          <p>Quer saber mais? <a href="/contato">Entre em contato conosco</a> para saber como a Aximute Make está pronta para ajudar você e sua empresa.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio