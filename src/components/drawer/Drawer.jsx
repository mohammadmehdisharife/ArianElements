// Drawer.jsx
import { useEffect } from 'react';
import styles from './Drawer.module.scss';

const Drawer = ({ 
    show, 
    onClose,
    children,
    position = 'right', // right, left
    width = 300, // عرض در دسکتاپ (پیکسل)
    className = '',
    ...rest 
}) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [show]);

    if (!show) return null;

    return (
        <>
            {/* اوورلی تیره */}
            <div className={styles.overlay} onClick={onClose} />
            
            {/* خود دراور */}
            <div 
                className={`${styles.drawer} ${styles[position]} ${className}`}
                style={{ '--drawer-width': `${width}px` }}
                {...rest}
            >
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Drawer;