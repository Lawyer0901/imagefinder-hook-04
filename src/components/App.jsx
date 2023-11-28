import { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import LargeImage from './LargeImage/LargeImage';
import Container from './Container/Container';
import Spinner from './FidgetSpinner/FidgetSpinner';

import ImageGallery from './ImageGallery/ImageGallery';
import { searchImage } from './api/api';

const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  const showLargeImage = largeImageURL => {
    setLargeImage(largeImageURL);
    setShowModal(true);
  };

  const closeModal = e => {
    setShowModal(false);
    setLargeImage(null);
  };

  const loadMore = () => setPage(prev => prev + 1);

  const handleSubmit = searchQuery => {
    setSearch(searchQuery);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // const { search, page } = this.state;
        setIsLoading(true);
        const data = await searchImage(search, page);
        setImages(prev => [...prev, ...data.hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [page, search]);
  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} showLargeImage={showLargeImage} />;
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {images.length > 0 && <Button onClick={loadMore} />}
      {showModal && (
        <Modal closeModal={closeModal}>
          <LargeImage largeImageURL={largeImage} />
        </Modal>
      )}
    </Container>
  );
};

// class AppOld extends Component {
//   state = {
//     search: '',
//     images: [],
//     isLoading: false,
//     error: null,
//     page: 1,
//     showModal: false,
//     largeImage: null,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     const { search, page } = this.state;
//     if (prevState.search !== search || prevState.page !== page) {
//       this.fetchImages();
//     }
//   }
//   showLargeImage = largeImageURL => {
//     // console.log(largeImageURL);
//     // if (!largeImageURL) {
//     //   this.setState({ isloading: true });
//     // }
//     this.setState({
//       largeImage: largeImageURL,
//       showModal: true,
//     });
//     // this.setState({ isloading: false });
//     // this.setState(state => ({ showModal: !state.showModal }));
//   };

//   closeModal = e => {
//     this.setState({
//       showModal: false,
//       largeImage: null,
//     });
//   };
//   async fetchImages() {
//     try {
//       const { search, page } = this.state;
//       this.setState({ isLoading: true });
//       const data = await searchImage(search, page);
//       this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }
//   handleSubmit = ({ search }) => {
//     this.setState({ search, images: [], page: 1 });
//   };

//   loadMore = () =>
//     this.setState(({ page }) => ({
//       page: page + 1,
//     }));
//   render() {
//     const { isLoading, error, images, showModal, largeImage } = this.state;
//     const { loadMore, showLargeImage, closeModal } = this;
//     // console.log(largeImage);

//     return (
//       <Container>
//         <Searchbar onSubmit={this.handleSubmit} />
//         <ImageGallery images={images} showLargeImage={showLargeImage} />;
//         {isLoading && <Spinner />}
//         {error && <p>{error}</p>}
//         {images.length > 0 && <Button onClick={loadMore} />}
//         {showModal && (
//           <Modal closeModal={closeModal}>
//             <LargeImage largeImageURL={largeImage} />
//           </Modal>
//         )}
//       </Container>
//     );
//   }
// }

export default App;
