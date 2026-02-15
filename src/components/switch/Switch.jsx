import { useState } from "react"
import styles from "./Switch.module.scss"

const Switch = ({ 
    defaultChecked = false, 
    onChange, 
    color = 'blue', 
    size = 'md', 
    className = '', 
    ...rest 
}) => {
    const [isChecked, setIsChecked] = useState(defaultChecked)

    const handleChange = (e) => {
        const newValue = e.target.checked
        setIsChecked(newValue)
        onChange?.(newValue)
    }

    return (
        <label className={`${styles.switch} ${styles[size]} ${className}`}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleChange}
                {...rest}
            />
            <span className={`${styles.slider} ${styles[color]}`}>
                <span className={styles.dot}></span>
            </span>
        </label>
    )
}

export default Switch