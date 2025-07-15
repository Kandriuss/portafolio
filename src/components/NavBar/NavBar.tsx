
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
            {/* Logo circular con iniciales */}
            <a href={PATHS.HOME} className={`${styles.logo} text`}>
                AB
            </a>

            <button className={styles.menuIcon} onClick={toggleMenu}>
                {isOpen ? <IoClose /> : <IoMenu />}
            </button>

            <ul className={`${styles.navlinks} ${isOpen ? styles.open : ''}`}>
                <li><a className="text" href={PATHS.HOME} onClick={closeMenu}>Inicio</a></li>
                <li><a className="text" href={PATHS.ABOUT_ME} onClick={closeMenu}>Sobre Mi</a></li>
                <li><a className="text" href={PATHS.PROJECTS} onClick={closeMenu}>Proyectos</a></li>
                <li><a className="text" href={PATHS.SERVICES} onClick={closeMenu}>Servicios</a></li>
            </ul>
        </nav>

    )
}