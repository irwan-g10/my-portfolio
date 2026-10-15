import { useEffect, useState } from 'react';
import Button from './Button';

export default function ScrollToTop() {
    const [isVisible, setIsvisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsvisible(true);
            } else {
                setIsvisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    if (!isVisible) return null;

    return (
        <div className="fixed right-10 bottom-10 z-50">
            <Button
                icon={<i className="bi bi-arrow-up"></i>}
                onClick={scrollToTop}
                className="h-13 w-13"
            />
        </div>
    );
}
