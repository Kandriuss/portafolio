/* COMPONENTES */
import { ProjectCard } from '../../components/ProjectCard';
/* ICONOS */
/* ESTILOS */
import styles from './project.module.css';

export const Project = () => {
    const projects = [
        {
            "id": 1,
            "projectName": "Gestión de Horas Extras",
            "description": "Aplicación web integral para la gestión y seguimiento de horas extras en planta, desarrollada con ReactJS y NestJS bajo arquitectura limpia y modular. Por temas de privacidad de la empresa no se puede acceder a la información.",
            "projectLink": "NO DISPONIBLE"
        },
        {
            "id": 2,
            "projectName": "Envío de Remesas",
            "description": "Frontend para plataforma web de envío de remesas, con interfaces responsivas desarrolladas en ReactJS y diseño centrado en el usuario. No se tiene link accesible.",
            "projectLink": "NO DISPONIBLE"
        },
        {
            "id": 3,
            "projectName": "Aplicación TodoList",
            "description": "Aplicación web desarrollada con ReactJS para la gestión de tareas diarias. Permite agregar, editar, marcar como completadas y eliminar tareas, con un diseño sencillo y responsive.",
            "projectLink": "https://todo-h649pb1v3-andres-s-projects-4bf15ae7.vercel.app/"
        }
        
    ];

    return (
        <main className='container'>
            <div>
                <div className={styles.projectsContainer}>
                    <ProjectCard projects={projects} />
                </div>
            </div>
        </main>
    );
};