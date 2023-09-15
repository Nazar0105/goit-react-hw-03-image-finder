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
    };
  }

  componentDidMount() {
    // Логіка, яка виконується після монтування компонента
  }

  componentDidUpdate(prevProps, prevState) {
    // Логіка, яка виконується після оновлення компонента
  }

  handleFormSubmit = (newQuery) => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
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
    const { query, images, largeImageURL, showModal, loading } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
