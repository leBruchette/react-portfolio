import { useEffect, useState } from 'react';


const usePreloadImages = (imageUrls) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let isSubscribed = true;
        const preloadImage = (url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve;
            });
        };

        const preloadImages = async () => {
            if (isSubscribed) {
                await Promise.all(imageUrls.map(preloadImage));
                setLoaded(true);
            }
        };

        preloadImages();

        return () => {
            isSubscribed = false;
        };
    }, [imageUrls]);

    return loaded;
};

export default usePreloadImages;
