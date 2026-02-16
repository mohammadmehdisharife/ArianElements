import styles from "./Input.module.scss"
import {THEME} from "../theme"


const Input = ({ color = THEME, className = '', ...rest }) => {
    return (
        <input 
            className={`${styles.input} ${styles[color]} ${className}`}
            dir="rtl"
            {...rest}
        />
    );
}

export default Input;