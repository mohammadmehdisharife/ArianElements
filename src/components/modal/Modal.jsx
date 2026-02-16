// Modal.jsx
import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ 
    show, 
    onClose,
    children,
    title,
    size = 'md', // sm, md, lg, xl, full
    closeOnOverlayClick = true,
    showCloseButton = true,
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
            {/* اوورلی */}
            <div 
                className={styles.overlay} 
                onClick={closeOnOverlayClick ? onClose : undefined}
            />
            
            {/* مودال */}
            <div 
                className={`${styles.modal} ${styles[size]} ${className}`}
                {...rest}
            >
                {/* هدر */}
                {(title || showCloseButton) && (
                    <div className={styles.header}>
                        {title && <h3 className={styles.title}>{title}</h3>}
                        {showCloseButton && (
                            <button className={styles.closeBtn} onClick={onClose}>
                                ×
                            </button>
                        )}
                    </div>
                )}
                
                {/* محتوا */}
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;