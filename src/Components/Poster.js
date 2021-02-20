import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SRating from "./Rating";
import noPoster from "assets/noPosterSmall.png";

const Container = styled.div``;

const Img = styled.div`
  background-image: url(${(props) => props.bgImg});
  height: 180px;
  background-size: cover;
  border-radius: 5px;
  background-position: center center;
  transition: opacity 0.1s ease-in-out; ;;
`;

const Rating = styled.span`
  position: absolute;
  width: 100%;
  text-align: center;
  transform: translateY(-18px);
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Img} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

const Year = styled.div`
  color: #95a5a6;
`;

const Poster = ({ id, imageUrl, rating, title, year, isMovie }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImgContainer>
          <Img
            bgImg={
              imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : noPoster
            }
          />
          <Rating>
            <SRating rating={rating}></SRating>
            {rating}/10
          </Rating>
        </ImgContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  isMovie: PropTypes.bool.isRequired,
};

export default Poster;
