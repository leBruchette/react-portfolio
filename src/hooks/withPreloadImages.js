import React from 'react';
import usePreloadImages from './usePreloadImages';

const withPreloadImages = (WrappedComponent, imageUrls) => {
    return (props) => {
        const loaded = usePreloadImages(imageUrls);

        if (!loaded) {
            return <div>Loading...</div>; // Or any loading spinner component
        }

        return <WrappedComponent {...props} />;
    };
};

export default withPreloadImages;
