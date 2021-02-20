import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import noPoster from "assets/noPosterSmall.png";
import SRating from "Components/Rating";
import Helmet from "react-helmet";
import Error from "Components/Error";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
`;

const BackDropImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: 100% 100%;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  padding: 50px;
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  a {
    width: 30%;
    height: 100%;
  }
`;

const Poster = styled.div`
  background-image: url(${(props) => props.Img});
  background-position: center center;
  background-size: 100% 100%;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.5);
  &:hover {
    opacity: 0.8;
  }
  transition: opacity 0.1s linear;
`;

const Details = styled.div`
  width: 70%;
  font-size: 15px;
  font-weight: 400;
  padding-left: 20px;
`;
const Title = styled.div`
  font-size: 5em;
  margin-bottom: 20px;
`;
const Year = styled.span`
  margin-right: 20px;
`;
const Duration = styled.span`
  margin: 0px 20px;
`;
const Genre = styled.span`
  margin: 0px 20px;
`;
const RatingBox = styled.span`
  margin-left: 20px;
`;

const Summary = styled.div`
  line-height: 25px;
  margin-top: 20px;
  text-align: justify;
`;

const Season = styled.div`
  margin: 20px 0px;
`;
const Episode = styled.div`
  margin-bottom: 20px;
`;

const DetailPresenter = ({ result, error, loading, isMovie }) => {
  console.log(result);
  const { backdrop_path, poster_path } = result;
  const genreName = [];
  result.genres.map((genre) => genreName.push(genre.name));
  return (
    <Container>
      <Helmet>
        <title>{isMovie ? result.title : result.name}</title>
      </Helmet>
      <BackDropImg
        bgImg={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      />
      <Content>
        <a href={result.homepage}>
          <Poster
            Img={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : noPoster
            }
          />
        </a>
        <Details>
          {isMovie ? (
            <>
              <Title>{result.title}</Title>
              <Year>
                {result.release_date
                  ? result.release_date.slice(0, 4)
                  : "Not defined"}
              </Year>
              ·<Duration>{`${result.runtime} min`}</Duration>·
              <Genre>
                {genreName.length !== 0 ? genreName.join(" / ") : "Not defined"}
              </Genre>
              ·
              <RatingBox>
                <SRating rating={result.vote_average}></SRating>
              </RatingBox>
              <Summary>{result.overview}</Summary>
            </>
          ) : (
            <>
              <Title>{result.name}</Title>
              <Year>
                {result.first_air_date
                  ? result.first_air_date.slice(0, 4)
                  : "Not defined"}
              </Year>
              ·<Duration>{`${result.episode_run_time[0]} min`}</Duration>·
              <Genre>
                {genreName.length !== 0 ? genreName.join(" / ") : "Not defined"}
              </Genre>
              ·
              <RatingBox>
                <SRating rating={result.vote_average}></SRating>
              </RatingBox>
              <Season>{`Season : ${result.number_of_seasons}`}</Season>
              <Episode>{`Episodes : ${result.number_of_episodes}`}</Episode>
              <Summary>{result.overview}</Summary>
            </>
          )}
        </Details>
      </Content>
      {error && <Error color="#e74c3c" text={error}></Error>}
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
