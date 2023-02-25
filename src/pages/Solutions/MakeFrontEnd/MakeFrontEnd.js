import React from 'react'
import { NavLink } from 'react-router-dom';

import Form from '../../../components/Form/Form'

import styles from './MakeFrontEnd.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const MakeFrontEnd = () => {
  window.scrollTo(0, 0)
  
  return (
    <div>
      <div
        className={styles.boxMF1}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(/img/bg_make_frontend_1.jpg)'
        }}>
         <div
          data-aos="fade-in"
          data-aos-once="true"
          className={styles.rowMF1}>
          <div>
            <i class="bi bi-columns-gap"></i>
          </div>
          <img src="/img/make_front.png" alt="" />
          <center><div className={styles.lineMF1}></div></center>
          <h1>Encante seus clientes com nossas soluções de design</h1>
          <p>Criação de sites e outras interfaces, com as linguagens e frameworks mais modernas do mercado.</p>
          <NavLink to='/contato'>Quero Conhecer essa Solução</NavLink>
         </div>
      </div>
      <div className={styles.boxMF2}>
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className={styles.row1MF2}>
          <img src="/img/img_make_front_1.png" alt="" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className={styles.row2MF2}>
          <h1>Layouts criativos, responsivos e modernos</h1>
          <div className={styles.lineMF2}></div>
          <p>Trabalhamos com sites e outras aplicações que envolva uma boa interface, nossas soluções são baseadas em HTML, CSS, Bootstrap, Sass, JavasScript e React. A Azimute Make desenvolve aplicações das mais básicas a avançada! </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className={styles.boxMF3}>
        <div className={styles.row1MF3}>
          <h1>
            <span><i class="bi bi-gear"></i> </span>
              Diagnóstico
          </h1>
          <p>Analisamos as necessidades de sua aplicação.</p>
        </div>
        <div className={styles.row2MF3}>
          <h1>
            <span><i class="bi bi-card-text"></i> </span>
              Proposta
          </h1>
          <p>Após análise, elabormos uma proposta comercial.</p>
        </div>
        <div className={styles.row3MF3}>
          <h1>
            <span><i class="bi bi-rocket-takeoff"></i> </span>
              Execução
          </h1>
          <p>Em caso de aceitação da proposta, excecutamos projeto.</p>
        </div>
        <div className={styles.row4MF3}>
          <h1>
            <span><i class="bi bi-tools"></i> </span>
              Ajuste
          </h1>
          <p>Com base nos seus feedbacks, ajustamos o site.</p>
        </div>
      </div>
      <div className={styles.boxMF4}>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className={styles.row1MF4}>
          <h1>Principais projetos feito pela Azimute Make</h1>
          <div className={styles.lineMF4}></div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className={styles.row2MF4}>
          <NavLink to="https://clone.wisleygoncalves.com/" target='_blank'>
            <img src="/img/netflix_clone.png" alt="" />
          </NavLink>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className={styles.row3MF4}>
          <NavLink to="https://clima.wisleygoncalves.com/" target='_blank'>
            <img src="/img/clima_agora.png" alt="" />
          </NavLink>
        </div>
      </div>
      <div className={styles.boxMF5}>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            id='contato'>
            <h1>FALE CONOSCO PARA <b>SABER MAIS</b></h1>
            <center><div className={styles.lineMF5}></div></center>
          </div>
          <div className={styles.boxForm}>
            <Form />
          </div>
      </div>
    </div>
  )
}

export default MakeFrontEnd