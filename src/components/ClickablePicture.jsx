import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [imgSelected, setImg] = useState(img);

  const handleImg = () => {
    imgSelected === 'maxence.png' ? setImg(imgClicked) : setImg(img);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${imgSelected})`,
        height: '500px',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={handleImg}
    ></div>
  );
};

export default ClickablePicture;
