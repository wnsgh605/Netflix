import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Error from "Components/Error";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  term,
  handleSubmit,
  updateTerm,
  error,
  loading,
}) => {
  console.log(tvResults);
  return (
    <Container>
      <Helmet>
        <title>Search | Popcorn Time</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movie/TV shows..."
          value={term}
          onChange={updateTerm}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults &&
            (movieResults.length === 0 ? (
              <Error
                text={`No Movies found for "${term}"`}
                color="#95a5a6"
              ></Error>
            ) : (
              <Section
                title="Searched Movies"
                children={movieResults.map((movie) => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    rating={movie.vote_average}
                    title={movie.title}
                    year={
                      movie.release_date
                        ? movie.release_date.slice(0, 4)
                        : "Not defined"
                    }
                    isMovie={true}
                  ></Poster>
                ))}
              ></Section>
            ))}
          {tvResults &&
            (tvResults.length === 0 ? (
              <Error
                text={`No TV Shows found for "${term}"`}
                color="#95a5a6"
              ></Error>
            ) : (
              <Section
                title="Searched TV Shows"
                children={tvResults.map((tv) => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    imageUrl={tv.poster_path}
                    rating={tv.vote_average}
                    title={tv.name}
                    year={
                      tv.first_air_date
                        ? tv.first_air_date.slice(0, 4)
                        : "Not defined"
                    }
                    isMovie={false}
                  ></Poster>
                ))}
              ></Section>
            ))}
          {error && <Error color="#e74c3c" text={error}></Error>}
        </>
      )}
    </Container>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  term: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SearchPresenter;
