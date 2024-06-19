import React from "react";

interface MovingImageProps {
    src: string;
    alt: string;
    offsetX: number;
    offsetY: number;
}

const MovingImage: React.FC<MovingImageProps> = ({ src, alt, offsetX, offsetY }) => {
    const style = {
        maxWidth: '250px',
        transform: `translate(${offsetX}px, ${offsetY}px)`,
    };

    return <img src={src} alt={alt} style={style} />;
};

export default MovingImage;
