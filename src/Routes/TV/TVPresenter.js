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

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>TV Shows | Popcorn Time</title>
      </Helmet>
      {topRated && topRated.length > 0 && (
        <Section
          title="Top Rated Series"
          children={topRated.map((tv) => (
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
      )}
      {airingToday && airingToday.length > 0 && (
        <Section
          title="Airing Now"
          children={airingToday.map((tv) => (
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
      )}{" "}
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map((tv) => (
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
      )}
      {error && <Error color="#e74c3c" text={error}></Error>}
    </Container>
  );
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
