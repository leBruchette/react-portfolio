import { useState, useEffect } from 'react';

const ImagePreloader = ({ images, onLoad }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const promises = images.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(promises)
            .then(() => {
                setLoaded(true);
                onLoad(); // Notify the parent component that images are loaded
            })
            .catch((err) => console.error('Error loading images', err));
    }, [images, onLoad]);

    return null; // This component does not render anything
};

export default ImagePreloader;
