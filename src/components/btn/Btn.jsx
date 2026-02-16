import styles from "./Btn.module.scss"
import {THEME} from "../theme"

const Btn = ({ children, variant = 'primary', color = THEME, className = '' , ...rest }) => {
    return (
        <button 
            className={`${styles.btn} ${styles[variant]} ${styles[color]} ${className}`} 
            {...rest}
        >
            {children}
        </button>
    );
}

export default Btn;