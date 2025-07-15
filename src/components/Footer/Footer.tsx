import React from 'react';
import styles from './Footer.module.css';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook,
  FaDiscord
} from 'react-icons/fa';
import '../../styles/global.css';
import type { SocialLink } from '../../interface/SocialLink';

const Footer: React.FC = () => {
  
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/tu-usuario',
      icon: <FaGithub />
    },
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/andresbolviar-sam',
      icon: <FaLinkedin />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/tu-usuario',
      icon: <FaInstagram />
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/tu-usuario',
      icon: <FaFacebook />
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/tu-servidor',
      icon: <FaDiscord />
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.socialSection}>
            <h3 className={`${styles.socialTitle} title-bold`}>Encuentranos en nuestras redes sociales</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <button
                  key={link.name}
                  className={styles.socialButton}
                  onClick={() => handleSocialClick(link.url)}
                  aria-label={`Visitar ${link.name}`}
                  title={link.name}
                >
                  {link.icon}
                </button>
              ))}
            </div>
          </div>
          
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
