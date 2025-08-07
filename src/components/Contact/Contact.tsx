import React from 'react';
import styles from './Contact.module.css';
import { FaDownload, FaEnvelope, FaPhone } from 'react-icons/fa';
import { profileImg, cv } from '../../assets';  

export const Contact: React.FC = () => {
    //Descargar CV
    const handleDownload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!window.confirm('¿Estás seguro que quieres descargar el curriculum de Andrés Bolivar?')) {
            e.preventDefault();
        }
    };
    return (
        <>
            <div>
                <img src={profileImg} alt="" className={styles.image} />
                <div className={styles.contact}>
                    <p className={`${styles.name} title`}>
                        Andrés Bolivar
                    </p>
                    <p className='text'>
                        Ingeniero en informática
                    </p>
                    <p className='text'>
                        <FaPhone />
                        +56 9 3873 8961
                    </p>
                    <p className='text'>
                        <FaEnvelope />
                        andres.bolivar.sam@gmail.com
                    </p>
                    <div className={styles.cv}>
                        <a href={cv} download className='text' onClick={handleDownload}>
                            <FaDownload />
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}