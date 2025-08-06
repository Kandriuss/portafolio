
import { useState } from 'react';
//Icono
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
//Estilos
import styles from './NavBar.module.css';
//Tipos
import { PATHS } from '../../libs/types';

//Componente de navegación
export const NavBar = () => {
    //Estado para controlar el menú hamburguesa
    const [isOpen, setIsOpen] = useState(false);

    //Función para alternar el estado del menú
    const toggleMenu = () => setIsOpen(!isOpen);
    //Función para cerrar el menú
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <a href={PATHS.HOME} className={styles.logo}>
                AB
            </a>

            {/* Navegación principal */}
            <ul className={`${styles.navlinks} ${isOpen ? styles.open : ''}`}>
                <li><a className="text" href={PATHS.HOME} onClick={closeMenu}>INICIO</a></li>
                <li><a className="text" href={PATHS.ABOUT_ME} onClick={closeMenu}>SOBRE MI</a></li>
                <li><a className="text" href={PATHS.SERVICES} onClick={closeMenu}>SERVICIOS</a></li>
                <li><a className={`text ${styles.disabled}`} href={PATHS.PROJECTS} onClick={(e) => { e.preventDefault(); closeMenu(); }}>PROYECTOS</a></li>
            </ul>

            {/* Iconos de redes sociales */}
            <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>f</a>
                <a href="#" className={styles.socialIcon}>𝕏</a>
                <a href="#" className={styles.socialIcon}>D</a>
                <a href="#" className={styles.socialIcon}>Be</a>
            </div>

            {/* Menú hamburguesa */}
            <button className={styles.menuIcon} onClick={toggleMenu}>
                {isOpen ? <IoClose /> : <IoMenu />}
            </button>
        </nav>
    )
}