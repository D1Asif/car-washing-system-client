import { Button } from 'keep-react';
import { ArrowLineUp } from 'phosphor-react';
import { useState, useEffect } from 'react';

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <Button
                    shape='circle'
                    size='lg'
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg duration-300 ease-in-out z-30"
                >
                    <ArrowLineUp size={32} weight='bold' />
                </Button>
            )}
        </div>
    );
};
