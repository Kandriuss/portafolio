import styles from './NavBar.module.css';
import { PATHS } from '../../libs/types';

//Componente de navegación
export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navlinks}>
                <li className="text"><a href={PATHS.HOME}>Inicio</a></li>
                <li className="text"><a href={PATHS.ABOUT_ME}>Sobre Mi</a></li>
                <li className="text"><a href={PATHS.PROJECTS}>Proyectos</a></li>
                <li className="text"><a href={PATHS.SERVICES}>Servicios</a></li>
            </ul>
        </nav>
    )
}