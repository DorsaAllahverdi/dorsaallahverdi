import React, { useState, useEffect } from 'react';

const ScrollComponent = (props) => {
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
                setShowPage(true);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <div>
        {showPage && <div>{props.children}</div>}
    </div>
    );
};

export default ScrollComponent;