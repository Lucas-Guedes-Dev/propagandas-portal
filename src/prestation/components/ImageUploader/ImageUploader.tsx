import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DropzoneContainer, DropzoneText, ImagePreview } from './style';

interface ImageUploaderProps {
    onImageDrop: (imageB64: string) => void;
    imageProp: string | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageDrop, imageProp }) => {
    const [image, setImage] = useState<string | null>(imageProp);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result as string);
        };
        reader.readAsDataURL(acceptedFiles[0]);
    }, []);

    useEffect(() => {
        if (image) {
            onImageDrop(image);
        }
    }, [onImageDrop, image]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] }
    });

    return (
        <DropzoneContainer {...getRootProps()}>
            <input {...getInputProps()} />
            {image ? (
                <ImagePreview style={{ width: '350px', height: '200px' }} src={image} alt="Preview" />
            ) : (
                <DropzoneText>
                    {isDragActive ? 'Solte a imagem aqui...' : 'Clique e escolha ou arraste uma imagem'}
                </DropzoneText>
            )}
        </DropzoneContainer>
    );
};

export default ImageUploader;
