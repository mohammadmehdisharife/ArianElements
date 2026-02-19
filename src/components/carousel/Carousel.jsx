import React from 'react';
import styles from "./Carousel.module.scss";
import { forwardRef, useState } from 'react';
import IconBtn from '../iconbtn/IconBtn';
import {THEME} from "../theme"

const Carousel = forwardRef(({ 
    children,
    color = THEME,
    slidesPerView = 1,
    width = '100%',
    className = '',
    ...rest 
}, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);
    
    const totalSlides = childrenArray.length;
    const maxIndex = Math.max(0, totalSlides - slidesPerView);

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (!childrenArray.length) return null;

    const showNavigation = totalSlides > slidesPerView;
    const dotCount = maxIndex + 1;

    // فقط اسلایدهای قابل نمایش رو محاسبه می‌کنیم
    const visibleSlides = childrenArray.slice(currentIndex, currentIndex + slidesPerView);

    return (
        <div 
            ref={ref}
            className={`${styles.carousel} ${styles[color]} ${className}`}
            style={{ width }}
            {...rest}
        >
            <div className={styles.viewport}>
                {/* ویترین اسلایدها - فقط به اندازه slidesPerView جا داره */}
                <div className={styles.slidesContainer}>
                    {visibleSlides.map((child, index) => (
                        <div 
                            key={currentIndex + index} 
                            className={styles.slide}
                            style={{ width: `${100 / slidesPerView}%` }}
                        >
                            {child}
                        </div>
                    ))}
                </div>

                {/* فلش‌ها */}
                {showNavigation && (
                    <>
                        <IconBtn
                            color={color}
                            className={`${styles.arrow} ${styles.prev} ${currentIndex === 0 ? styles.disabled : ''}`}
                            onClick={prevSlide}
                            aria-label="اسلاید قبلی"
                            disabled={currentIndex === 0}
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                            </svg>
                        </IconBtn>
                        
                        <IconBtn
                            color={color}
                            className={`${styles.arrow} ${styles.next} ${currentIndex === maxIndex ? styles.disabled : ''}`}
                            onClick={nextSlide}
                            aria-label="اسلاید بعدی"
                            disabled={currentIndex === maxIndex}
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                            </svg>
                        </IconBtn>
                    </>
                )}
            </div>

            {/* دات‌ها */}
            {showNavigation && (
                <div className={styles.dots}>
                    {Array.from({ length: dotCount }).map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`رفتن به اسلاید ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
});

Carousel.displayName = 'Carousel';

export default Carousel;