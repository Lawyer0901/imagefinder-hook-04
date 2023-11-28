import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import LargeImage from './LargeImage/LargeImage';
import Container from './Container/Container';
import Spinner from './FidgetSpinner/FidgetSpinner';

import ImageGallery from './ImageGallery/ImageGallery';
import { searchImage } from './api/api';

class App extends Component {
  state = {
    search: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    showModal: false,
    largeImage: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }
  showLargeImage = largeImageURL => {
    // console.log(largeImageURL);
    // if (!largeImageURL) {
    //   this.setState({ isloading: true });
    // }
    this.setState({
      largeImage: largeImageURL,
      showModal: true,
    });
    // this.setState({ isloading: false });
    // this.setState(state => ({ showModal: !state.showModal }));
  };

  closeModal = e => {
    this.setState({
      showModal: false,
      largeImage: null,
    });
  };
  async fetchImages() {
    try {
      const { search, page } = this.state;
      this.setState({ isLoading: true });
      const data = await searchImage(search, page);
      this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  handleSubmit = ({ search }) => {
    this.setState({ search, images: [], page: 1 });
  };

  loadMore = () =>
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  render() {
    const { isLoading, error, images, showModal, largeImage } = this.state;
    const { loadMore, showLargeImage, closeModal } = this;
    console.log(largeImage);

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
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
  }
}

export default App;
