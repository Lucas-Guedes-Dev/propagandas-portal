import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DropzoneContainer, DropzoneText, ImagePreview } from './style';

export interface ImageUploader {
    onImageDrop: (imageB64: string | null) => void
}

const ImageUploader: React.FC<ImageUploader> = (props) => {
    const [image, setImage] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const reader = new FileReader();

        reader.onload = () => setImage(reader.result as string);
        reader.readAsDataURL(acceptedFiles[0]);

        props.onImageDrop(image || null)
    }, []);

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
