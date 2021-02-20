import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Text = styled.span`
  color: ${(props) => props.color};
`;

const Error = ({ text, color }) => (
  <Container>
    <Text text={text} color={color}>
      {text}
    </Text>
  </Container>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Error;
