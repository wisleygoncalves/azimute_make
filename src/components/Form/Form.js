import React, { useState } from 'react'

import styles from './Form.module.css'

import emailjs from '@emailjs/browser'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Form = () => {

  //forms
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  
  const sucessMessage = document.getElementById("sucessMessage")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const templateParams = {
      from_name: name,
      email: email,
      message: [
        `WhatsApp: ${phone} `,
        `Mensagem: ${message}`
      ]
    }

    emailjs.send('service_0uqvqkd', 'template_zhi4rw8', templateParams, 'QZyKGqQpUXuO3rfoK')
    .then((response) => {
      console.log('Email Enviado', response.status, response.text)

      setEmail("")
      setName("")
      setPhone("")
      setMessage("")

      sucessMessage.innerHTML = 'Obrigado por entrar em contato! Em breve entaremos em contato!'

    }, (error) => {
      console.log(`Aconteceu um erro: ${error}`)
    })

  }

  return (
    <div>
      <form
        data-aos="fade-in"
        data-aos-once="true"
        onSubmit={handleSubmit}
        className={styles.containerForm}>
        <label>
          <span>Nome*</span>
          <input
            type="text"
            required
            placeholder='Digite seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          <span>E-mail*</span>
          <input
            type="email"
            required
            placeholder='Digite seu e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Telefone*</span>
          <input
            type="text"
            required
            placeholder='(99) 99999-9999'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>
        </label>
        <label>
          <span>Como podemos ajudar?*</span>
          <textarea
            placeholder='Como podemos ajudar?'
            required value={message}
            onChange={(e) => setMessage(e.target.value)}>
          </textarea>
        </label>
        <button className={styles.btnForm}>Enviar</button>
      </form>
      <div className={styles.boxSucessMessage}>
        <p id='sucessMessage'></p>
      </div>
    </div>
  )
}

export default Form