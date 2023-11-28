import { Items, GaleryImage } from 'components/LargeImage/LargeImage.styled';

const ImageGalleryItem = ({ id, webformatURL, tags, onClick }) => {
  return (
    <Items className="gallery-item">
      <GaleryImage
        id={id}
        onClick={onClick}
        src={webformatURL}
        alt={tags}
        width="200px"
      />
    </Items>
  );
};

export default ImageGalleryItem;
