import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import BoxHome from '../../components/BoxHome/BoxHome'
import Slider from '../../components/Slide/Slider'

import styles from './Home.module.css'

import emailjs from '@emailjs/browser'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
  window.scrollTo(0, 0)

  //forms
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const sucessMessage = document.getElementById("sucessMessage")

  const handleEmail = (e) => {
    e.preventDefault()
    
    const templateParams = {
      from_name: name,
      email: email
    }

    emailjs.send('service_0uqvqkd', 'template_iltlqxm', templateParams, 'QZyKGqQpUXuO3rfoK')
    .then((response) => {
      console.log('Email Enviado', response.status, response.text)

      setEmail("")
      setName("")

      sucessMessage.innerHTML = 'Parabéns, você vai ficar por dentro do universo Maker!'

    }, (error) => {
      console.log(`Aconteceu um erro: ${error}`)
    })

  }

  return (
    <div>
      <div
        data-aos="fade-in"
        data-aos-once="true">
        <Slider />
      </div>
      <div
      className={styles.quote}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundImage: 'url(/img/bg_quote.jpg)'
      }}>
        <div className={styles.rowTitle}>
          <h1>Veja alguns relatos dos trabalhos realizados pela <span>Azimute Make</span></h1>
          <p><span>Não acredite somente em nossas palavras,</span> veja que alguns clientes falaram do nosso time Maker</p>
          <NavLink to="/contato">Saiba mais!</NavLink>
        </div>
        <div
          className={styles.row}
          data-aos="fade-up"
          data-aos-once="true">
          <i class="bi bi-quote"></i>
          <p>O Wisley é extremamente atencioso e rápido na conclusão do trabalho. Os websites que ele desenvolveu para mim são bonitos, fáceis de usar e o layout ficou super organizado. Um dos melhores freelas de desenvolvimento web que já encontrei aqui no 99Freelas. Recomenrdaria SEMPRE!</p>
          <p className={styles.quoteAuthor}><span>Tekoa/Zoly,</span> 99Freelas</p>
        </div>
        <div
          className={styles.row}
          data-aos="fade-up"
          data-aos-once="true">
          <i class="bi bi-quote"></i>
          <p>Excelente freela para trabalhos de desenvolvimento de blogs. Recomendo</p>
          <p className={styles.quoteAuthor}><span>Tekoa/Zoly,</span> 99Freelas</p>
        </div>
        <div
          className={styles.row}
          data-aos="fade-up"
          data-aos-once="true">
          <i class="bi bi-quote"></i>
          <p>Excelente profissional, rápido, fez exatamente como foi orientado. Vou fazer negócio novamente.</p>
          <p className={styles.quoteAuthor}><span>Tekoa/Zoly,</span> Luiz Cora</p>
        </div>
      </div>
      <div className={styles.boxContainer}>
        <div className={styles.boxTitle}>
          <p
            data-aos="fade-up"
            data-aos-once="true">
              Soluções <span>Maker</span>
          </p>
        </div>
          <BoxHome />
      </div>
      <div className={styles.boxContainer}>
        <div className={styles.newsletterTitle}>
          <p
            data-aos="fade-up"
            data-aos-once="true"> 
            Receba nossas <span>Novidades!</span>
          </p>
        </div>
        <div className={styles.boxNewsletter}>
          <form
            onSubmit={handleEmail}
            data-aos="fade-right"
            data-aos-once="true">
            <label>
              <input
                className={styles.formNames}
                type="text"
                name="name"
                placeholder='Digite seu nome'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                size='50'
              />
            </label>
            <label>
              <input
                id='formsEmail'
                type="email"
                name="email"
                placeholder='Digite seu email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size='50'
              />
            </label>
            <button className={styles.btnNewsletter}>
              <p><span><i class="bi bi-bell-fill"></i></span> Cadastrar</p>
            </button>
          </form>
        </div>
        <div className={styles.boxSucessMessage}>
          <p id='sucessMessage'></p>
        </div>
      </div>
      <div
        className={styles.containerAboutUs}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(/img/bg_about_us.jpg)'
      }}>
        <div className={styles.boxAboutUs}>
          <div 
            className={styles.titleAboutUs}
            data-aos="fade-up"
            data-aos-once="true">
              <h1>Somos especializado em nortear projetos</h1>
              <div className={styles.lineAboutUs}></div>
          </div>
          <div
            className={styles.contentAboutUs}
            data-aos="fade-up"
            data-aos-once="true">
            <p>A Azimute Make tem foco em  gerenciamento e execução de projetos de TI, Data Science e DevOps. Logo, valorizamos a transparência; sigilo dos dados; assertividade em cada projeto que executamos. Buscamos proporcionar na vida da empresa e dos colaboradores, comodidade e otimização de custo, pois os processos de implementação e execução são responsabilidade da Azimute Make. Logo, com essa sinergia podemos tomar decisões cada vez mais assertiva e criativa!</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true">
          <center>
            <NavLink to="/sobre-nos" className={styles.btnAboutUs}>Conheça nosso Time!</NavLink>
          </center>
        </div>
      </div>
      <div className={styles.boxContainer}>
        <div
          className={styles.titleWork}
          data-aos="fade-in"
          data-aos-once="true">
          <p><span>Conheçam</span> nossos trabalhos</p>
        </div>
      </div>
      <div className={styles.boxWork}>
        <div
          className={styles.work1}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/bg_work_1.jpg)'
          }}
          data-aos="fade-up"
          data-aos-once="true">
            <img src="/img/react.png" alt="" />
            <h1>netflixclone.com</h1>
            <p>Projeto da home do site da Netflix, que utiliza a API do TMDB Filmes para demostrar as séries e filmes na home. </p>
            <NavLink to="https://clone.wisleygoncalves.com/" target='_blank'>Veja o Projeto</NavLink>
        </div>
        <div
          className={styles.work2}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/bg_work_2.jpg)'
          }}
          data-aos="fade-up"
          data-aos-once="true">
            <img src="/img/js.png" alt="" />
            <h1>climaagora.com</h1>
            <p>Projeto em JavaScript Vanilla que utiliza a API gratuita do Open Weather Map para demonstrar dados do clima de diversas localidade do mundo.</p>
            <NavLink to="https://clima.wisleygoncalves.com/" target='_blank'>Veja o Projeto</NavLink>
        </div>
        <div
          className={styles.work3}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/bg_work_3.jpg)'
          }}
          data-aos="fade-up"
          data-aos-once="true">
            <img src="/img/sass.png" alt="" />
            <h1>electrum.com</h1>
            <p>Projeto da home de uma loja virtual, que utiliza todos recursos do Sass. </p>
            <NavLink to="https://electrum.wisleygoncalves.com/" target='_blank'>Veja o Projeto</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home