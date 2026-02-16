import styles from "./IconBtn.module.scss"
import { forwardRef } from 'react'
import {THEME} from "../theme"

const IconBtn = forwardRef(({ 
    children, 
    variant = 'primary', 
    color = THEME, 
    size = 'md',
    className = '', 
    ...rest 
}, ref) => {
    return (
        <button 
            ref={ref}
            className={`${styles.iconBtn} ${styles[variant]} ${styles[color]} ${styles[size]} ${className}`} 
            {...rest}
        >
            {children}
        </button>
    );
});

IconBtn.displayName = 'IconBtn';

export default IconBtn;