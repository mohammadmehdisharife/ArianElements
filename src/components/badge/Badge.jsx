import styles from "./Badge.module.scss"
import {THEME} from "../theme"

const Badge = ({ 
    children, 
    color = THEME, 
    variant = 'standard', 
    size = 'md',
    className = '', 
    ...rest 
}) => {
    return (
        <span 
            className={`
                ${styles.badge} 
                ${styles[color]} 
                ${styles[variant]} 
                ${styles[`size-${size}`]}
                ${className}
            `} 
            {...rest}
        >
            {children}
        </span>
    )
}

export default Badge