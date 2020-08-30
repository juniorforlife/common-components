import {useState} from 'react';
import {generateId} from '../../../utils';
import NavigationService from '../../../services/navigation';

const useImageAttachment = (initialState = []) => {
  const [images, setImages] = useState(initialState);

  const addImages = (imageUris) => {
    if (Array.isArray(imageUris)) {
      const newImages = imageUris.map(({path}) => ({
        id: generateId(),
        uri: path,
      }));
      setImages([...images, ...newImages]);
    } else {
      const newImage = {
        id: generateId(),
        uri: imageUris,
      };
      setImages([...images, newImage]);
    }
  };

  const editImage = (imageUri, newImages) => {
    setImages(newImages);
  };

  const deleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const viewImages = (index, viewedImages, editable) => {
    NavigationService.navigate('ImageViewer', {
      imageIndex: index,
      data: viewedImages,
      onDelete: editable && deleteImage,
      onEdit: editable && editImage,
    });
  };

  const resetImages = () => setImages([]);

  return [images, addImages, viewImages, resetImages];
};

export default useImageAttachment;
