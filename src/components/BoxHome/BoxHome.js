import React from 'react'
import styles from './BoxHome.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const BoxHome = () => {
  return (
    <div className={styles.boxSolution}>
          <div
            className={styles.box1}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_1.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
          </div>
          <div
            className={styles.box2}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_5.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
            <h1>Sistemas de Gestão Personalizados</h1>
          </div>
          <div
            className={styles.box3}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_2.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
          </div>
          <div
            className={styles.box4}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_6.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
            <h1>Aplicações Web Personalizadas</h1>
          </div>
          <div
            className={styles.box5}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_7.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
            <h1>Pacotes de Growth Marketing Completos</h1>
          </div>
          <div
            className={styles.box6}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_8.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
            <h1>Aplicações do Básico ao Avançado</h1>
          </div>
          <div
            className={styles.box7}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_9.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
            <h1>Business Intelligences</h1>
          </div>
          <div
            className={styles.box8}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_3.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
          </div>
          <div
            className={styles.box9}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_10.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
            <h1>Integração de Sistemas</h1>
          </div>
          <div
            className={styles.box10}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_11.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
            <h1>Automatize seu Negócio</h1>
          </div>
          <div
            className={styles.box11}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/solucao_4.jpg)'
            }}
            data-aos="fade-in"
            data-aos-once="true">
          </div>
        </div>
  )
}

export default BoxHome