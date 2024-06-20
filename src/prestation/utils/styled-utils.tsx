export const movingImage = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    const offsetX = (window.innerWidth / 2 - x) / 20;
    const offsetY = (window.innerHeight / 2 - y) / 20;

    return { offsetX, offsetY };
};