import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import Loader from '../Loader/Loader'; // Змінено імпорт на Loader


class Searchbar extends Component {
  state = {
    query: '',
    isLoading: false, // Додайте стан для відстеження завантаження
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim() === '') return; // Перевірка на пустий запит
    this.setState({ isLoading: true }); // Встановлення стану isLoading перед запитом
    this.props.onSubmit(query);
    this.setState({ query: '', isLoading: false }); // Скидання стану після відправки запиту
  };

  render() {
    const { query, isLoading } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={styles.SearchFormButton}
            disabled={isLoading} // Вимкнути кнопку під час завантаження
          >
            {isLoading ? (
              <Loader
                visible={true}
                height="20" // Налаштуйте розмір відповідно до вашого Loader компонента
                width="20" // Налаштуйте розмір відповідно до вашого Loader компонента
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            ) : (
              <span className={styles.SearchFormButtonLabel}>Search</span>
            )}
          </button>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
            disabled={isLoading} // Вимкнути введення під час завантаження
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
