import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ReactImageReveal({
    src,
    className,
    onClick,
    altText = 'image',
    transitionDuration = '1s',
    transitionTimingFunction = 'ease-in-out',
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setIsLoading(false);
        };
    }, [src]);

    const imageStyle = {
        width: '100%',
        height: 'auto',
        opacity: isLoading ? 0 : 1,
        transition: `opacity ${transitionDuration} ${transitionTimingFunction}`,
    };

    return (
        <img
            src={src}
            style={imageStyle}
            className={className}
            onClick={onClick}
            alt={altText}
        />
    );
}

ReactImageReveal.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    altText: PropTypes.string,
    transitionDuration: PropTypes.string,
    transitionTimingFunction: PropTypes.string,
};

ReactImageReveal.defaultProps = {
    className: '',
    onClick: () => { },
    altText: 'image',
    transitionDuration: '1s',
    transitionTimingFunction: 'ease-in-out',
};

export default ReactImageReveal;
