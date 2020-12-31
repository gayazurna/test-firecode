import React from 'react';
import Button from '../../components/Button';
import InputLink from '../../components/InputLink';
import InputFile from '../../components/InputFile';
import ImageCard from '../../components/ImageCard';
import Preview from '../../components/Preview';
import { ImageType } from '../../components/ImageCard/types';

import './style.scss';

function App() {
  const [images, setImages] = React.useState<ImageType[]>([]);
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [imagesJson, setImagesJson] = React.useState<ImageType[]>([]);
  const [previewImg, setPreviewImg] = React.useState<ImageType | undefined>(
    undefined
  );

  // @ts-ignore
  const onReaderLoad = (e) => {
    const file = JSON.parse(e.target.result);
    setImagesJson(file.images);
  };

  // @ts-ignore
  const uploadHandler = (e) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
    console.log('eee', e.target.files[0]);
  };

  const changeHandler = (value: string): void => {
    setImageUrl(value);
  };

  const clickHandler = () => {
    if (imageUrl) {
      const newImages = [{ url: imageUrl }, ...images];
      localStorage.setItem('urls', JSON.stringify(newImages));
      setImages(newImages);
      setImageUrl('');
    }

    if (Boolean(imagesJson.length)) {
      const newImages = [...imagesJson, ...images];
      setImages(newImages);
      setImagesJson([]);
    }
  };

  const showPreview = (image: ImageType) => {
    setPreviewImg(image);
  };

  const closePreview = () => {
    setPreviewImg(undefined);
  };

  const removeImage = (indexForRemove: number, allImages: ImageType[]) => {
    const newImages = allImages.filter(
      (image, index) => indexForRemove !== index
    );
    setImages(newImages);
  };

  React.useEffect(() => {
    setImages(JSON.parse(localStorage.getItem('urls') || '[]'));
  }, []);

  return (
    <div className='App'>
      <div className='App__form'>
        <InputFile onChange={uploadHandler} />
        <InputLink
          onChange={(newValue) => changeHandler(newValue)}
          value={imageUrl}
        />
        <Button onClick={clickHandler}>Отправить</Button>
      </div>
      <div className='App__images'>
        {images.map((image, index) => (
          <ImageCard
            index={index}
            onRemove={(indexImage) => removeImage(indexImage, images)}
            key={index}
            url={image.url}
            description={image.description}
            onClick={showPreview}
          />
        ))}
      </div>
      {previewImg && (
        <Preview
          onClose={closePreview}
          url={previewImg.url}
          description={previewImg?.description}
        />
      )}
    </div>
  );
}

export default App;
