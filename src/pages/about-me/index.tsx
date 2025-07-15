import styles from './aboutme.module.css';
import sobremi from '../../assets/image/sobremi.jpeg';

export const AboutMe = () => {
    return (
        <>
        <div className={styles.container}>
            <h1 className={`${styles.title} title-bold`}>Sobre mi</h1>
            <section className={styles.aboutMeSection}>
                <div>
                    <img src={sobremi} alt="Andrés Bolívar" className={styles.avatar} />
                </div>
                <div>
                    <p className='textSpecify text'>
                    Soy Andrés Bolívar, Ingeniero en Informática de origen venezolano, apasionado por la innovación, el desarrollo de soluciones tecnológicas modernas y el aprendizaje constante. Desde muy joven me ha motivado la posibilidad de transformar ideas en productos funcionales que impacten positivamente la vida de las personas y los procesos de negocio.
                    <br /><br />
                    Mi enfoque está en la creación de herramientas eficientes y escalables que resuelvan problemas reales. Disfruto asumir desafíos donde pueda construir desde cero, mejorar procesos existentes o integrar tecnologías emergentes. Soy una persona curiosa por naturaleza, motivada por el cambio y siempre abierta a nuevas oportunidades que me permitan crecer técnica y profesionalmente.
                    <br /><br />
                    Actualmente trabajo como Desarrollador Fullstack en ECORILES (Aguas Andinas), liderando el desarrollo de una plataforma web para la gestión de horas extras. He trabajado en todo el ciclo de desarrollo: desde el análisis de requerimientos, diseño de arquitectura, implementación con ReactJS y NestJS, hasta el despliegue. Todo bajo principios de arquitectura limpia y metodologías ágiles.
                    <br /><br />
                    Me considero una persona proactiva, con pensamiento analítico, alta capacidad de adaptación y enfoque colaborativo. Siempre estoy en búsqueda de soluciones creativas que aporten valor, ya sea a través de una línea de código o de una nueva idea. Soy un convencido de que la tecnología, bien utilizada, puede abrir puertas, transformar vidas y construir futuro.
                    </p>
                </div>
            </section>  
        </div>
           
        </>
    )
}