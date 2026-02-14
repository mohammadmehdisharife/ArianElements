import styles from "./Btn.module.scss"

const Btn = ({ children, variant = 'primary', color = 'blue', ...rest }) => {
    return (
        <button 
            className={`${styles.btn} ${styles[variant]} ${styles[color]}`} 
            {...rest}
        >
            {children}
        </button>
    );
}

export default Btn;