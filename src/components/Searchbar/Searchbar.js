import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
// import Loader from '../Loader/Loader';

class Searchbar extends Component {
  state = {
    query: '',
    isLoading: false,
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim() === '') return;
    this.setState({ isLoading: true });
    this.props.onSubmit(query);
    this.setState({ query: '', isLoading: false });
  };

  render() {
    const { query, isLoading } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={styles.SearchFormButton}
            disabled={isLoading}
          >
            {isLoading ? (
              'Loading...'
            ) : (
              'Search'
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
            disabled={isLoading}
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
