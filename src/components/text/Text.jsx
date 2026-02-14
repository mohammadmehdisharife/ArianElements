import styles from "./Text.module.scss"

const Text = ({ 
    children, 
    color = 'dark', 
    size = 'md',
    fade = false,
    className = '', 
    ...rest 
}) => {
    return (
        <p 
            className={`
                ${styles.text} 
                ${styles[color]} 
                ${styles[`size-${size}`]}
                ${fade ? styles.fade : ''}
                ${className}
            `} 
            dir="rtl"
            {...rest}
        >
            {children}
        </p>
    );
}

export default Text;