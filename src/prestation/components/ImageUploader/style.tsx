import styled from 'styled-components';

export const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cccccc;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  &:hover {
    border-color: #666666;
  }
`;

export const DropzoneText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #666666;
  white-space: normal
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px;
`;