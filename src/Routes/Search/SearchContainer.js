/* eslint-disable import/no-anonymous-default-export */
import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    term: "",
    error: null,
    loading: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { term } = this.state;
    if (term !== "") {
      this.startSearch(term);
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ term: value });
  };

  startSearch = async (term) => {
    this.setState({
      loading: true,
    });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(term);
      const {
        data: { results: tvResults },
      } = await tvApi.search(term);
      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({
        error: "Couldn't find anything",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { movieResults, tvResults, term, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        term={term}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}

export default SearchContainer;
