import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator } from "react-native";
import Slide from "../../components/Moives/Slide";

const Container = styled.View`
  flex:1;
  background-color: black;
  justify-content: center;
`;

export default ({loading, nowPlaying}) => {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map(movie => (
              <Slide 
                key={movie.id} 
                id={movie.id} 
                title={movie.original_languege}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
              />
            ))}
          </Swiper>
        </>
      )}
    </Container>
  );
};