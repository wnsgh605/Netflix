import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RatingImg = styled.span`
  font-size: 11px;
  letter-spacing: -2px;
  margin-right: 8px;
`;

const SRating = ({ rating }) => {
  if (rating < 1) {
    return <RatingImg rating={rating}>🌑🌑🌑🌑🌑</RatingImg>;
  } else if (rating < 2) {
    return <RatingImg rating={rating}>🌗🌑🌑🌑🌑</RatingImg>;
  } else if (rating < 3) {
    return <RatingImg rating={rating}>🌕🌑🌑🌑🌑</RatingImg>;
  } else if (rating < 4) {
    return <RatingImg rating={rating}>🌕🌗🌑🌑🌑</RatingImg>;
  } else if (rating < 5) {
    return <RatingImg rating={rating}>🌕🌕🌑🌑🌑</RatingImg>;
  } else if (rating < 6) {
    return <RatingImg rating={rating}>🌕🌕🌗🌑🌑</RatingImg>;
  } else if (rating < 7) {
    return <RatingImg rating={rating}>🌕🌕🌕🌑🌑</RatingImg>;
  } else if (rating < 8) {
    return <RatingImg rating={rating}>🌕🌕🌕🌗🌑</RatingImg>;
  } else if (rating < 9) {
    return <RatingImg rating={rating}>🌕🌕🌕🌕🌑</RatingImg>;
  } else if (rating < 10) {
    return <RatingImg rating={rating}>🌕🌕🌕🌕🌗</RatingImg>;
  } else {
    return <RatingImg rating={rating}>🌕🌕🌕🌕🌕</RatingImg>;
  }
};

SRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default SRating;
