import { Button } from "../Button";
import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar";
import { PATHS } from "../../libs/types";

export const Header: React.FC = () => {
    //Navegación
    const navigate = useNavigate();

    //Funcion
    const handleClick = () => {
        navigate(PATHS.ABOUT_ME);
    }

    return (
     <>
        <div className={styles.heroContainer}>
            <NavBar />
            <h1 className="title-bold">Andrés Bolívar</h1>
            <span className="text">Ingeniero en informática</span>
            <div className={`styles.buttonContainer`}>
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
     </>
    )
 }