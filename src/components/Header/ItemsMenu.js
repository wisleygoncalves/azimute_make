import { NavLink } from "react-router-dom"

import styles from './ItemsMenu.module.css'

export const menuItems = [{
  title: 'Home',
  link: '/',
  target: ''
},
{
  title: 'Sobre Nós',
  link: '/sobre-nos',
  target: ''
},
{
  title: <p>Soluções Make <span><i class="bi bi-chevron-down"></i></span></p>,
  submenu: [{
    title() {
      return <ul className={styles.menuCanvas}>
        <li>
          
          <div className={styles.frontEnd}>
            <NavLink to='/make-frontend' >
              <div><i class="bi bi-columns-gap"></i></div>
              <img src="/img/make_front.png" alt="" />
              <p>Criação de sites e outras interfaces, com as linguagens e frameworks mais modernas do mercado.</p>
            </NavLink>
          </div>
          <div className={styles.backEnd}>
            <NavLink to='/lancamentos'>
              <div><i class="bi bi-back"></i></div>
              <img src="/img/make_back.png" alt="" />
              <p>Criação de sites, lojas virtuais e marketplaces; sistemas de gestão web; API e; automação com robôs.</p>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={styles.fullStack}>
            <NavLink NavLink to='/lancamentos'>
              <div><i class="bi bi-box"></i></div>
              <img src="/img/make_full.png" alt="" />
              <p>Criação de aplicações web; sistemas web; microserviços e; automatização com robôs utilizando Python.</p>
            </NavLink>
          </div>
          <div className={styles.data}>
            <NavLink to='/lancamentos'>
              <div><i class="bi bi-activity"></i></div>
              <img src="/img/make_data.png" alt="" />
              <p>Serviços com banco de dados; Análise de Dados e Machine Learning;  Big Data; BI com Power BI e Excel.</p>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={styles.mobile}>
            <NavLink to='/lancamentos'>
              <div><i class="bi bi-phone"></i></div>
              <img src="/img/make_mobile.png" alt="" />
              <p>Desenvolvimento de aplicativos em Android e IOS, com as linguagens nativas e frameworks mais modernos.</p>
            </NavLink>
          </div>
          <div className={styles.digital}>
            <NavLink to='/lancamentos'>
              <div><i class="bi bi-chat"></i></div>
              <img src="/img/make_digital.png" alt="" />
              <p>Desenvolvimento de Growth Marketing de A a Z, desde a estrutura, planejamento e excecução.</p>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={styles.devops}>
            <NavLink to='/lancamentos'>
              <div><i class="bi bi-hdd"></i></div>
              <img src="/img/make_devops.png" alt="" />
              <p>Soluções de A e Z de infraestrutura de servidores, desde o gerencimanto a soluções de deploy automático.</p>
            </NavLink>
          </div>
          <div className={styles.ia}>
            <NavLink to='/lancamentos'>
              <div><i class="bi bi-robot"></i></div>
              <img src="/img/make_ia.png" alt="" />
              <p>Otimização e automatização de negócios e empresas com soluções de Inteligência de Artificial.</p>
            </NavLink>
          </div>
        </li>
      </ul>
    }
  }]
},
{
  title: 'Portfolio',
  link: '/portfolio',
  target: ''
},
{
  title: 'Blog',
  link: 'https://blog.azimute.com',
  target: '_blank'
},
{
  title: 'Contato',
  link: '/contato',
  target: ''
},
{
  title: <p><i class="bi bi-person"></i> Área do Cliente</p>,
  link: 'https://crm.azimute.com',
  target: '_blank'
}]