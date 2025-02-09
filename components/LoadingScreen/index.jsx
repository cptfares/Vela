import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Container, Screen, Tagline, Title } from "./LoadingScreen.styled";

const LoadingScreen = () => {
  return (
    <Screen>
      <Container>
        <Title>Vela agency</Title>
        <Tagline>guiding hand for brands to stand</Tagline>
      </Container>
    </Screen>
  );
};

export default LoadingScreen;
