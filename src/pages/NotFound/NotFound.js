import React from 'react'
import styles from './NotFound.module.css'

const NotFound = () => {
  window.scrollTo(0, 0)
  
  return (
    <div
    className={styles.bgNotFound}
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(/img/bg_404.jpg)'
    }}>
      <h1
        className={styles.titleNotFound} 
        data-aos="fade-in"
        data-aos-once="true">
          404
      </h1>
      <h1
        className={styles.title2NotFound}
        data-aos="fade-in"
        data-aos-once="true">
          Página não encontrada. :/
      </h1>
      <p
        data-aos="fade-in"
        data-aos-once="true">
        Desculpa. A página que você está procurando não existe nesse site...
      </p>
    </div>
  )
}

export default NotFound