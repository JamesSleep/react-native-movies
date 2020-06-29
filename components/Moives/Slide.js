import React from "react";
import styled from "styled-components/native";
import Protypes from "prop-types";
import { apiImage } from "../../api";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.7;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: column;
`;

const Data = styled.View`
  width: 50%;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;

`;

const Votes = styled.Text`
  color: white;
  opacity: 0.7

`;

const Overview = styled.Text`
  color: white;
  opacity: 0.7

`;

const Slide = ({ id, title, backgroundImage, votes, overview }) => (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage)}} />
      <Content>
        <Data>
          <Title>{title}</Title>
          <Votes>{votes} / 10</Votes>
          <Overview>{overview}</Overview>
        </Data>
      </Content>
    </Container>
);


Slide.prototype = {
  id: Protypes.number.isRequired,
  title: Protypes.string.isRequired,
  backgroundImage: Protypes.string.isRequired,
  votes: Protypes.number.isRequired,
  overview: Protypes.string.isRequired
};

export default Slide;