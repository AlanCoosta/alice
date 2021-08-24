import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromLeft} 1s;

  .swiper-button-prev {
    visibility: hidden;
  }

  .swiper-button-next {
    color: #dedede;
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 0.8rem;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide-container {
    height: 400px;
    margin-top: 2rem;

    @media screen and (min-width: 600px) {
      height: 600px;
    }
  }
`;

export const ProjectTitle = styled.h1`
  color: white;
  margin-top: 3.2rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Contact = styled.div`
  margin-top: 2rem;

  > p {
    color: #aeaeae;
    font-size: 1.2rem;
    text-align: center;

    :last-child {
      letter-spacing: 0.14em;
      margin-top: 1.2rem;
    }
  }
`;

export const Footer = styled.p`
  color: #aeaeae;
  font-size: 1.2rem;
  text-align: center;
  margin: 40px 0;
`;
