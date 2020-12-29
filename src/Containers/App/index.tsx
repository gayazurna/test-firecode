import React from 'react';
import Button, { ButtonType } from '../../components/Button';
import InputLink from '../../components/InputLink';
import InputFile from '../../components/InputFile';
import { AppProps, Image } from './types';

import './style.scss';

function App() {
  const imagesArray = [
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
  const [images, setImages] = React.useState<Image[]>(imagesArray);
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const clickHandler = () => {};
  return (
    <div className='App'>
      <InputFile />
      <InputLink />

      <Button type={ButtonType.Primary} onClick={clickHandler}>
        Send
      </Button>
      <div className='images'>
        {images.map((image) => (
          <div>
            <img src={image.url} />
            {image.description && <span>{image.description}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
