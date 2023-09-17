import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import fetchImages from './services/apiService';

import styles from './app.module.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      images: [],
      page: 1,
      largeImageURL: '',
      showModal: false,
      loading: false,
      hasMoreImages: true, // Додайте стан для відстеження наявності більше зображень
    };
  }

  componentDidMount() {
    this.fetchImagesData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchImagesData();
    }
  }

  fetchImagesData = async () => {
    const { query, page, hasMoreImages } = this.state;
    if (!query || !hasMoreImages) return; // Перевірте hasMoreImages перед відправкою запиту

    this.setState({ loading: true });

    try {
      const data = await fetchImages(query, page);

      this.setState((prevState) => ({
        images: [...prevState.images, ...data],
        hasMoreImages: data.length === 12, // Перевірте, чи є більше зображень для завантаження
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleFormSubmit = (newQuery) => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
      hasMoreImages: true, // Скидайте hasMoreImages при новому пошуковому запиті
    });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = (largeImageURL) => {
    this.setState({
      largeImageURL,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      largeImageURL: '',
      showModal: false,
    });
  };

  render() {
    const { images, largeImageURL, showModal, loading, hasMoreImages } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader visible={true} />}
        {hasMoreImages && images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
