import { Button } from "../Button";
import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar";
import { PATHS } from "../../libs/types";
import { imgHeader } from "../../assets";

export const Header: React.FC = () => {
    //Navegación
    const navigate = useNavigate();

    //Funcion
    const handleClick = () => {
        navigate(PATHS.ABOUT_ME);
    }

    return (
        <div className={styles.headerContainer}>
            <NavBar />
            <div className={styles.heroContent}>
                <div className={styles.textSection}>
                    <div className={styles.greeting}>
                        <span className="text">Hola, soy Andrés Bolívar</span>
                    </div>
                    <h1 className={styles.mainTitle}>
                        INGENIERO EN INFORMÁTICA DEDICADO AL DESARROLLO DE SOFTWARE 
                    </h1>
                    <div className={styles.location}>
                        <span className="text">Santiago, Chile</span>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            label='Sobre Mi'
                            onClick={handleClick}
                            type='button'
                            variant='primary'
                            size='medium'
                            disabled={false}
                        />
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <div className={styles.profileImage}>
                        <img src={imgHeader} alt="Andrés Bolívar" />
                    </div>
                </div> 
            </div>
            <div className={styles.scrollIndicator}>
                <span className="text">SCROLL PARA MÁS</span>
                <div className={styles.scrollLine}></div>
            </div>
        </div>
    )
}