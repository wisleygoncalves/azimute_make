import React from 'react'
import styles from './Slider.module.css'

// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { NavLink } from 'react-router-dom';

const Slider = () => {

  return (
    <div className={styles.slide}>
      <Swiper
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 7500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Autoplay, Pagination, Navigation]}
       className="mySwiper"
      >
        <SwiperSlide>
          <div
          className={styles.slideCard}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/slide_front.jpg)'
          }}>
           <div className={styles.slideContentRight}>
              <div className={styles.slideIconeFront}>
                <i class="bi bi-columns-gap"></i>
              </div>
              <center><img src="/img/make_front.png" alt="" /></center>
              <center>
                <div className={styles.slideContentLineFront}>
                </div>
              </center>
              <p>Criação de sites e outras interfaces, com as linguagens e frameworks mais modernas do mercado.</p>
              <center>
                <NavLink to='/make-frontend'> 
                  <div className={styles.btnFront}>
                    Saiba Mais
                  </div>
                </NavLink>
              </center>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className={styles.slideCard}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/slide_back.jpg)'
          }}>
           <div className={styles.slideContentLeft}>
              <div className={styles.slideIconeBack}>
                <i class="bi bi-back"></i>
              </div>
              <center><img src="/img/make_back.png" alt="" /></center>
              <center>
                <div className={styles.slideContentLineBack}>
                </div>
              </center>
              <p>Criação de sites, lojas virtuais e marketplaces; sistemas de gestão web; API e; automação com robôs.</p>
              <center>
                <NavLink to='/lancamentos'> 
                  <div className={styles.btnBack}>
                    Saiba Mais
                  </div>
                </NavLink>
              </center>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className={styles.slideCard}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/slide_full.jpg)'
          }}>
           <div className={styles.slideContentRight}>
              <div className={styles.slideIconeFull}>
                <i class="bi bi-box"></i>
              </div>
              <center><img src="/img/make_full.png" alt="" /></center>
              <center>
                <div className={styles.slideContentLineFull}>
                </div>
              </center>
              <p>Criação de aplicações web; sistemas web; microserviços e; automatização com robôs utilizando Python.</p>
              <center>
                <NavLink to='/lancamentos'> 
                  <div className={styles.btnFull}>
                    Saiba Mais
                  </div>
                </NavLink>
              </center>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className={styles.slideCard}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/slide_data.jpg)'
          }}>
           <div className={styles.slideContentLeft}>
              <div className={styles.slideIconeData}>
                <i class="bi bi-activity"></i>
              </div>
              <center>
                <img src="/img/make_data.png" alt="" />
              </center>
              <center>
                <div className={styles.slideContentLineData}>
                </div>
              </center>
              <p>Serviços com banco de dados; Análise de Dados e Machine Learning;  Big Data; BI com Power BI e Excel.</p>
              <center>
                <NavLink to='/lancamentos'> 
                  <div className={styles.btnData}>
                    Saiba Mais
                  </div>
                </NavLink>
              </center>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className={styles.slideCard}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/slide_mobile.jpg)'
          }}>
           <div className={styles.slideContentRight}>
              <div className={styles.slideIconeMobile}>
                <i class="bi bi-phone"></i>
              </div>
              <center><img src="/img/make_mobile.png" alt="" /></center>
              <center>
                <div className={styles.slideContentLineMobile}>
                </div>
              </center>
              <p>Desenvolvimento de aplicativos em Android e IOS, com as linguagens nativas e frameworks mais modernos.</p>
              <center>
                <NavLink to='/lancamentos'> 
                  <div className={styles.btnMobile}>
                    Saiba Mais
                  </div>
                </NavLink>
              </center>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className={styles.slideCard}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/slide_digital.jpg)'
          }}>
           <div className={styles.slideContentLeft}>
              <div className={styles.slideIconeDigital}>
                <i class="bi bi-chat"></i>
              </div>
              <center>
                <img src="/img/make_digital.png" alt="" />
              </center>
              <center>
                <div className={styles.slideContentLineDigital}>
                </div>
              </center>
              <p>Desenvolvimento de Growth Marketing de A a Z, desde a estrutura, planejamento e excecução.</p>
              <center>
                <NavLink to='/lancamentos'> 
                  <div className={styles.btnDigital}>
                    Saiba Mais
                  </div>
                </NavLink>
              </center>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className={styles.slideCard}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/slide_devops.jpg)'
          }}>
           <div className={styles.slideContentRight}>
              <div className={styles.slideIconeDevops}>
                <i class="bi bi-hdd"></i>
              </div>
              <center><img src="/img/make_devops.png" alt="" /></center>
              <center>
                <div className={styles.slideContentLineDevops}>
                </div>
              </center>
              <p>Soluções de A e Z de infraestrutura de servidores, desde o gerencimanto a soluções de deploy automático.</p>
              <center>
                <NavLink to='/lancamentos'> 
                  <div className={styles.btnDevops}>
                    Saiba Mais
                  </div>
                </NavLink>
              </center>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className={styles.slideCard}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/slide_ia.jpg)'
          }}>
           <div className={styles.slideContentLeft}>
              <div className={styles.slideIconeIa}>
                <i class="bi bi-robot"></i>
              </div>
              <center>
                <img src="/img/make_ia.png" alt="" />
              </center>
              <center>
                <div className={styles.slideContentLineIa}>
                </div>
              </center>
              <p>Otimização e automatização de negócios e empresas com soluções de Inteligência de Artificial.</p>
              <center>
                <NavLink to='/lancamentos'> 
                  <div className={styles.btnIa}>
                    Saiba Mais
                  </div>
                </NavLink>
              </center>
           </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider