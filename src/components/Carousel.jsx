import { useState } from 'react';

const Carousel = ({ images }) => {
  const imgArr = [images[0], images[1], images[2], images[3]];
  const [imgSelected, setImgSelected] = useState(0);

  const handleImg = (direction) => {
    if (direction === 'right') {
      imgSelected < 3 ? setImgSelected(imgSelected + 1) : setImgSelected(0);
    } else {
      imgSelected > 0 ? setImgSelected(imgSelected - 1) : setImgSelected(3);
    }
  };

  return (
    <div>
      <button onClick={() => handleImg('left')}>Left</button>
      <img src={imgArr[imgSelected]} alt="profile img" />
      <button onClick={() => handleImg('right')}>Right</button>
    </div>
  );
};

export default Carousel;
