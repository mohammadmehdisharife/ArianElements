import styles from "./Card.module.scss"
import {THEME} from "../theme"

const Card = ({ children, color = THEME, className = '', ...rest }) => {
    return (
        <div className={`${styles.card} ${styles[color]} ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Card