import styles from "./Btn.module.scss"

const Btn = ({ children, variant = 'primary', color = 'blue', className = '' , ...rest }) => {
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