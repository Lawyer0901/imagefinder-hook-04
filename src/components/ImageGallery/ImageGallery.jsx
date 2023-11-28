import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { List, Text } from 'components/LargeImage/LargeImage.styled';

const ImageGallery = ({ images, showLargeImage }) => {
  return (
    <List>
      {images.length > 0 ? (
        images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
              onClick={() => showLargeImage(image.largeImageURL)}
            />
          );
        })
      ) : (
        <Text>There are no images, try to search something :)!</Text>
      )}
    </List>
  );
};

export default ImageGallery;
