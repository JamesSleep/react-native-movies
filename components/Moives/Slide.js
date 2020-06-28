import React from "react";
import styled from "styled-components/native";
import Protypes from "prop-types";
import { Dimensions } from "react-native";
import { apiImage } from "../../api";

const { width:WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  background-color: red;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
`;

const Slide = ({ id, title, backgroundImage, votes, overview }) => {
  return (
    <Container>
      <BG 
        style={{width:"100%", height:"100%"}} 
        source={{ uri: apiImage(backgroundImage)}} 
      />
    </Container>
  )
}

Slide.prototype = {
  id: Protypes.number.isRequired,
  title: Protypes.string.isRequired,
  backgroundImage: Protypes.string.isRequired,
  votes: Protypes.number.isRequired,
  overview: Protypes.string.isRequired
};

export default Slide;