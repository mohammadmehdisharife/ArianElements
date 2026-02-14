import styles from "./Card.module.scss"

const Card = ({ children, color = 'blue', className = '', ...rest }) => {
    return (
        <div className={`${styles.card} ${styles[color]} ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Card