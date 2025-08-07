/* Componentes */
import { Card } from '../../components/Card/Card';
import { Contact } from '../../components/Contact/Contact';
/* Iconos */
import { FaCloud, FaDatabase, FaGraduationCap, FaTools  } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';
import { SiFrontendmentor } from "react-icons/si";
import { VscBracketDot  } from "react-icons/vsc";
import { SiReact } from "react-icons/si";
/* Estilos */
import styles from './home.module.css';
import '../../styles/global.css';


export const Home = () => {
    return (
        <>
            <main className='container'>
                {/* Educación */}
                <div>
                    <h2 className={`title-bold ${styles.title}`}>Educación</h2>
                    <div className='cardRow'>
                        <Card
                            title='INACAP'
                            description='Ingeniería en informática'
                            icon={<FaGraduationCap />}
                        />
                        <Card
                            title='Certificaciones'
                            description='AWS Academy Graduate, Diseño y gestión de base de datos, Desarrollo full Stack, Arquitectura cloud, etc'
                            icon={<GrCertificate />}
                        />
                    </div>
                </div>

                <div className='separator'></div>

                {/* Conocimientos */}
                <div>
                    <h2 className={`title-bold ${styles.title}`}>Conocimientos</h2>
                    <div className='cardRow conocimientos-grid'>
                        <Card
                            title='Frontend'
                            description='React, Next.js, HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS, Bootstrap, etc'
                            icon={<SiReact/>}
                        />
                        <Card
                            title='Backend'
                            description='Node.js, Express, Python, NestJS, Express'
                            icon={<VscBracketDot/>}
                        />
                        <Card
                            title='Base de datos'
                            description='MySQL, PostgreSQL, MongoDB, Firebase, SQL Server'
                            icon={<FaDatabase/>}
                        />
                        <Card
                            title='Cloud'
                            description='AWS, Azure, GCP, etc'
                            icon={<FaCloud/>}
                        />
                        <Card
                            title='Herramientas'
                            description='Git, GitHub, GitLab, Docker, Postman, etc'
                            icon={<FaTools/>}
                        />
                    </div>
                </div>

                <div className='separator'></div>

                {/* Experiencia */}
                <div>
                    <h2 className={`title-bold ${styles.title}`}>Experiencia</h2>
                    <div className='cardRow'>
                        <Card
                            title='Desarrollador Fullstack – ECORILES'
                            description='App web para gestión de horas extras (NestJS + React)'
                            icon={<VscBracketDot  />}
                        />
                        <Card
                            title='Desarrollador Frontend – Remesas (Freelance)'
                            description='Plataforma de envío de remesas (React + UX/UI)'
                            icon={<SiFrontendmentor />}
                        />
                    </div>
                </div>

                <div className='separator'></div>
                {/* Contacto */}
                <div>
                    <h2 className={`title-bold ${styles.title}`}>Contacto</h2>
                    <div>
                        <Contact />
                    </div>
                </div>
            </main>
        </>
    )
}

