import type { ButtomProps } from "../../libs/types";
import styles from './Button.module.css';

export const Button: React.FC<ButtomProps> = ({
    label,
    onClick, 
    type = 'button', 
    variant = 'primary',
    size = 'medium',
    disabled = false
}) => {
    return (
        <button
            className={`${styles.buttom} ${styles[variant]} ${styles[size]} text`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}