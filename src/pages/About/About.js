import { NavLink } from 'react-router-dom';

import styles from './About.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  window.scrollTo(0, 0)

  return (
    <div>
      <div
        data-aos="fade-in"
        data-aos-once="true"
        className={styles.aboutBox1}
        style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/img/bg_about_1.jpg)'
        }}>
        <p>A Azimute Make nasce com proposito de ser</p>
        <h1>Especialista em nortear projetos</h1>
        <div className={styles.aboutLine}></div>
      </div>
      <div
        className={styles.aboutBox2}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(/img/bg_quote.jpg)'
      }}>
        <div
          data-aos="fade-down"
          data-aos-once="true" 
          className={styles.boxRow1}>
          <h1 id='about'>Oferecemos soluções de A e Z desde programação, Devops, Data Science e Marketing</h1>
        </div>
        <div
          data-aos="fade-up"
         data-aos-once="true"
          className={styles.boxRow2}>
          <p>Atuamos em projetos de Front End, Back End, Full Stack, Data Science, Mobile, Marketing, DevOps e IA. Assim, você terá um parceiro que oferece soluções de A e Z, em troca de menos esforço e custo, com garantia que você terá eficiência em seus processos.</p>
        </div>
      </div>
      <div
        className={styles.aboutBox3}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(/img/bg_about_2.jpg)'
        }}>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className={styles.boxRow3}>
            <h1>E como fazemos isso?</h1>
            <p className={styles.contentRow3}>Nossa <b>sinergia</b> funcionará através de <b>boa comunicação e tercerização</b> de projetos de TI e Marketing presente em seu negócio.</p>
            <p className={styles.contentRow3}>Assim, quanto mais longa a parceria e volume de projetos trazidos para Azimute Make, mais barato fica a conta!</p>
            <p>Gostou? <NavLink to="/contato">Fale Conosco</NavLink></p>
        </div>
      </div>
      <div
        className={styles.aboutBox4}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(/img/bg_about_3.jpg)'
        }}
      >
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className={styles.rowBox4}>
        <h1>Conheça nossa misão, valores e visão</h1>
        <h3>Uma boa parceria é formada através do comprometimento e transparência</h3>
        <ul>
          <li>
            <p><span>Misão: </span>Buscar o máximo de acertividade nas aplicações desenvolvidas pela divisão Make da Azimute</p>
          </li>
          <li>
            <p><span>Valores: </span> Trasparência, responsabilidade, compromisso e criatividade. </p>
          </li>
          <li>
            <p><span>Visão: </span>Torna-se sinômino de qualidade e pioneirismo no mercado de TI.</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default About