import React from 'react'
import styles from './MakeSolutions.module.css'

const MakeSolutions = () => {
  window.scrollTo(0, 0)
  
  return (
    <div
      style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(/img/bg_makesolutions.jpg)'
    }}
      className={styles.containerSolutions}>
      <div
        data-aos="fade-in"
        data-aos-once="true"
        className={styles.rowSolutions}>
      <div>
        <img src="/Azimute_make_icone.png" alt="" />
      </div>
      <div>
        <h1>Nosso <span>Time Maker</span> está preparando essa nova solução... </h1>
      </div>
      </div>
    </div>
  )
}

export default MakeSolutions