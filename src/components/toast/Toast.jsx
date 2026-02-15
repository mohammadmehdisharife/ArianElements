// Toast.jsx
import { useEffect } from 'react';
import Card from '../card/Card';
import styles from './Toast.module.scss';

const Toast = ({ 
    show, 
    children, 
    color = 'blue',
    duration = 3000,
    onClose,
    className
}) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose?.();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [show, duration, onClose]);

    if (!show) return null;

    return (
        <div className={styles.toastWrapper} onClick={onClose}>
            <Card color={color} className={className}>
                {children}
            </Card>
        </div>
    );
};

export default Toast;