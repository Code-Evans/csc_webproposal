const images = import.meta.glob('../assets/**/*', { eager: true });


export const getImageUrl = (path) => {
    const imageRelativePath = path;
    // Dynamically resolve the image import
    const imagePath = images[`../assets/${imageRelativePath}`]?.default;
    if (!imagePath) {
        return `../assets/${imageRelativePath}`
    }
    return imagePath;
};