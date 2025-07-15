import { FaCode, FaNewspaper, FaServer, FaShoppingCart, FaUserTie } from "react-icons/fa"
import { HiUserGroup } from "react-icons/hi";
import { SiExercism } from "react-icons/si";
import { GiProcessor } from "react-icons/gi";
import { FaLayerGroup } from "react-icons/fa";



import { Card } from "../../components/Card/Card"
import styles from './Service.module.css';
export const Service = () => {
    return (
        <main className='container'>
            
            <h1 className='title-bold'>Servicios freelance</h1>
            <div className='cardRow'>
                 <Card
                    title='Desarrollo Web a medida'
                    description='Diseño y desarrollo de sitios web modernos, responsivos y rápidos, adaptados a tus necesidades. Ideal para negocios, portafolios personales, landing pages y más.'
                    icon={<FaCode />}
                />

                <Card
                    title='Tiendas Online/E-commerce'
                    description='Creación de tiendas virtuales seguras y funcionales donde podrás vender tus productos o servicios. Integración con pasarelas de pago, gestión de productos y diseño atractivo.'
                    icon={<FaShoppingCart/>}   
                />
                    
                <Card
                    title='Blogs y Sitios Informativos'
                    description='Construcción de blogs profesionales o páginas informativas para compartir contenido, noticias, artículos o presentar tu marca con estilo y claridad.'
                    icon={<FaNewspaper/>}
                />

                <Card
                    title='Asesoría y Acompañamiento'
                    description='¿Tienes una idea y no sabes por dónde empezar? Te asesoro técnicamente para convertir esa idea en una solución digital real. Desde planificación hasta publicación.'
                    icon={<FaUserTie/>}
                />
            </div>
            <div className='separator'></div>
            <div>
                <h1 className='title-bold'>Servicios para Empresas</h1>
                <div className='cardRow'>
                <Card
                    title='Desarrollo de Software'
                    description='Diseño y mantenimiento de plataformas internas o productos digitales usando tecnologías modernas como ReactJS, NestJS, MongoDB y PostgreSQL.'
                    icon={<SiExercism/>}
                />
                <Card
                    title='Creación de APIs y Backends'
                    description='Diseño de servicios backend sólidos, seguros y escalables, siguiendo buenas prácticas y principios SOLID.'
                    icon={<FaServer/>}
                />

                <Card
                    title='Arquitectura de Software Limpia'
                    description='Estructuración de proyectos con enfoque en modularidad, mantenibilidad y escalabilidad, aplicando arquitectura hexagonal o de capas.'
                    icon={<FaLayerGroup/>}
                />

                <Card
                    title='Trabajo Colaborativo y Metodologías Ágiles'
                    description='Participación en equipos ágiles (Scrum, Kanban), documentación clara, y comunicación efectiva con áreas técnicas y de negocio.'
                    icon={<HiUserGroup/>}
                />

                <Card
                    title='Digitalización de Procesos'
                    description='Automatización de tareas repetitivas, implementación de paneles administrativos y sistemas que mejoran la eficiencia operativa.'
                    icon={<GiProcessor/>}
                />
                </div>
            </div>
            <div className='separator'></div>
            <h1 className='title-bold'>¿Por qué elegirme como desarrollador?</h1>
            <div className={styles.textContainer}>
                <p className='textSpecify text'>
                    Porque no solo desarrollo software, desarrollo soluciones con visión.
                    <br /><br />
                    Soy una persona apasionada por la innovación, con mentalidad analítica, enfoque profesional y compromiso real con cada proyecto. Combino creatividad, base técnica sólida y responsabilidad para entregar resultados que generan impacto.
                    <br /><br />
                    Ya sea que necesites una página web que represente tu marca, automatizar un proceso en tu empresa o construir una aplicación completa desde cero, te ofrezco tecnología de calidad, comunicación clara y resultados que suman valor.
                </p>
            </div>
        </main>
       
    )
}