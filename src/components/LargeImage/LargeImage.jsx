import { Image } from './LargeImage.styled';

const LargeImage = ({ largeImageURL }) => {
  return <Image src={largeImageURL} alt="" width="800px" />;
};

export default LargeImage;
