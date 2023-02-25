import React from 'react'

import styles from './Contact.module.css'

import Form from '../../components/Form/Form'

const Contact = () => {
  window.scrollTo(0, 0)
  
  return (
    <div
      id='contato'
      className={styles.boxContact}>
      <div className={styles.row1Contact}
        data-aos="fade-in"
        data-aos-once="true">
        <h1>Contato</h1>
        <p><span><i class="bi bi-envelope"></i> E-mail:</span> wisley.goncalvees@gmail.com</p>
        <p><span><i class="bi bi-whatsapp"></i> WhatsApp:</span> (34) 99995-4606</p>
      </div>
      <div className={styles.row2Contact}>
        <Form />
      </div>
    </div>
  )
}

export default Contact