// Copy.jsx
import { useState } from 'react';
import Toast from '../toast/Toast';

const Copy = ({ 
    text, 
    children,
    color = 'blue',
    onCopy 
}) => {
    const [showToast, setShowToast] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setShowToast(true);
            onCopy?.();
        } catch (err) {
            console.log('خطا در کپی');
        }
    };

    return (
        <>
            <div onClick={handleCopy}>
                {children}
            </div>

            <Toast 
                show={showToast}
                color={color}
                onClose={() => setShowToast(false)}
            >
                کپی شد
            </Toast>
        </>
    );
};

export default Copy;