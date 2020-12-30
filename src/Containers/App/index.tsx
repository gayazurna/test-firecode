import React from 'react';
import Button, { ButtonType } from '../../components/Button';
import InputLink from '../../components/InputLink';
import InputFile from '../../components/InputFile';
import ImageCard from '../../components/ImageCard';
import Preview from '../../components/Preview';
import { ImageType, ImageProps } from '../../components/ImageCard/types';

import './style.scss';

const imagesArray: ImageType[] = [
  {
    url: 'https://www.placecage.com/300/150',
    description: 'Николас Кейдж: 300x150',
  },
  {
    url: 'https://www.placecage.com/350/400',
    description: 'Николас Кейдж: 350x400',
  },
  {
    url: 'https://www.placecage.com/350/550',
    description: 'Николас Кейдж: 350x550',
  },
  {
    url: 'https://www.placecage.com/340/200',
    description: 'Николас Кейдж: 340x200',
  },
  {
    url: 'https://www.placecage.com/330/700',
    description: 'Николас Кейдж: 330x700',
  },
  {
    url: 'https://www.placecage.com/320/400',
    description: 'Николас Кейдж: 320x400',
  },
  {
    url: 'https://www.placecage.com/310/600',
    description: 'Николас Кейдж: 310x600',
  },
  {
    url: 'https://www.placecage.com/500/400',
    description: 'Николас Кейдж: 500x400',
  },
  {
    url: 'https://www.placecage.com/250/250',
    description: 'Николас Кейдж: 250x250',
  },
  {
    url: 'https://www.placecage.com/420/350',
    description: 'Николас Кейдж: 420x350',
  },
  {
    url: 'https://www.placecage.com/200/200',
    description: 'Николас Кейдж: 200x200',
  },
  {
    url: 'https://www.placecage.com/1200/700',
    description: 'Николас Кейдж: 1200x700',
  },
];
function App() {
  const [images, setImages] = React.useState<ImageType[]>(imagesArray);
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
    console.log('IMAGE', image);
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
  return (
    <div className='App'>
      <InputFile onChange={uploadHandler} />
      <InputLink
        onChange={(newValue) => changeHandler(newValue)}
        value={imageUrl}
      />

      <Button type={ButtonType.Primary} onClick={clickHandler}>
        Send
      </Button>
      <div className='App__images'>
        {images.map((image, index) => (
          <ImageCard
            // key={`${image.url}_${index}`}
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
