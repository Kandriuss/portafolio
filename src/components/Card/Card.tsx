import type { CardProps } from "../../libs/types";
import styles from './Card.module.css';

export const Card: React.FC<CardProps> = ({
    title,
    description,
    icon
}) => {
    return (
        <div className={styles.card}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <h3 className='title'>{title}</h3>
            <p className='text'>{description}</p>
        </div>
    )
}