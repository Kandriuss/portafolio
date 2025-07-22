import React from 'react';
import styles from './Footer.module.css';
import '../../styles/global.css';
import { PATHS } from '../../libs/types';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* NavBar del footer */}
          <nav className={styles.footerNav}>
            <ul className={styles.footerNavLinks}>
              <li><a className="text" href={PATHS.HOME}>Inicio</a></li>
              <li><a className="text" href={PATHS.ABOUT_ME}>Sobre Mi</a></li>
              <li><a className={`text ${styles.disabled}`} href={PATHS.PROJECTS} onClick={(e) => e.preventDefault()}>Proyectos</a></li>
              <li><a className="text" href={PATHS.SERVICES}>Servicios</a></li>
            </ul>
          </nav>
          
          <div className={styles.copyrightSection}>
            <p className={`${styles.copyright} text`}>
              © 2025 Andrés Bolívar. Todos los derechos reservados.
            </p>
            <p className={`${styles.copyright} text`}>
              Hecho con ❤️ usando React + TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
