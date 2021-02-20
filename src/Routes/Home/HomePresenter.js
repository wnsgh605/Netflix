import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Error";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>Movies | Popcorn Time</title>
      </Helmet>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          title="Now Playing"
          children={nowPlaying.map((movie) => (
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
      )}
      {upcoming && upcoming.length > 0 && (
        <Section
          title="Upcomings"
          children={upcoming.map((movie) => (
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
      )}
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map((movie) => (
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
      )}
      {error && <Error color="#e74c3c" text={error}></Error>}
    </Container>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
