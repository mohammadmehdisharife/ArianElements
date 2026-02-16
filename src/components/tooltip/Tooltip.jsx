import styles from "./Tooltip.module.scss"
import {THEME} from "../theme"

const Tooltip = ({ children, content, position = 'top', color = THEME, className = '', ...rest }) => {
    return (
        <div className={`${styles.tooltipContainer} ${className}`} {...rest}>
            {children}
            <span className={`${styles.tooltip} ${styles[position]} ${styles[color]}`}>
                {content}
            </span>
        </div>
    )
}

export default Tooltip