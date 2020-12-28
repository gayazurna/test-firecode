import React from 'react';
import Button, {ButtonType} from '../../components/Button'
import {AppProps, Image} from './types'
import './App.css';

function App() {
  const [images, setImages] = React.useState<Image[]>([]);
  const [imageUrl, setImageUrl] = React.useState<string>('');
const clickHandler = () => {

}
  return (
    <div className="App">

      <Button type={ButtonType.Primary} onClick={clickHandler}>Send</Button>
        {images.map((image) => (
        <div>
          <img src={image.url}/>
          {image.description && <span>{image.description}</span>}
        </div>
        ))}
    </div>
  );
}

export default App;
