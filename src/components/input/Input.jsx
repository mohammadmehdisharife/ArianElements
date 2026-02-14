import styles from "./Input.module.scss"

const Input = ({ color = 'blue', className = '', ...rest }) => {
    return (
        <input 
            className={`${styles.input} ${styles[color]} ${className}`}
            dir="rtl"
            {...rest}
        />
    );
}

export default Input;