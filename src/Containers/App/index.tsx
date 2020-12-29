import React from 'react';
import Button, { ButtonType } from '../../components/Button';
import InputLink from '../../components/InputLink';
import InputFile from '../../components/InputFile';
import ImageCard from '../../components/ImageCard';
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

  const changeHandler = (value: string): void => {
    setImageUrl(value);
  };
  const clickHandler = () => {
    console.log('dsdd');
    if (imageUrl) {
      const newImages = [{ url: imageUrl }, ...images];
      console.log('>>', newImages);
      setImages(newImages);
    }
  };
  const showPreview = () => {};
  return (
    <div className='App'>
      <InputFile />
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
            key={`${image.url}_${index}`}
            url={image.url}
            description={image.description}
            onClick={showPreview}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
