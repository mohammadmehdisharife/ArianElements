// Img.jsx
import { useState } from 'react';
import styles from './Img.module.scss';

const Img = ({ 
    src, 
    alt = '',
    width,
    height,
    radius = false,
    lazy = true,
    fallback = '/images/placeholder.jpg',
    objectFit = 'cover', // cover, contain, fill
    className = '',
    ...rest 
}) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleError = () => {
        setError(true);
        setLoading(false);
    };

    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <div 
            className={`${styles.imgContainer} ${className}`}
            style={{ 
                width: width,
                height: height,
                borderRadius: radius ? '8px' : '0'
            }}
        >
            {loading && (
                <div className={styles.skeleton} />
            )}
            
            <img
                src={error ? fallback : src}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                loading={lazy ? 'lazy' : 'eager'}
                className={`${styles.img} ${styles[objectFit]} ${loading ? styles.hidden : ''}`}
                {...rest}
            />
        </div>
    );
};

export default Img;