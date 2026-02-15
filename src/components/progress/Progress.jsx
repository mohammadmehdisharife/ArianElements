import styles from "./Progress.module.scss"

const Progress = ({ 
    value = 0, 
    color = 'blue',
    size = 'md',
    className = '',
    ...rest 
}) => {
    return (
        <div className={`${styles.progress} ${styles[size]} ${className}`} {...rest}>
            <div 
                className={`${styles.bar} ${styles[color]}`} 
                style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
            />
        </div>
    )
}

export default Progress