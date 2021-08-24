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
`;

export const Container = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-top: 24px;

  /* svg {
    :first-child {
      margin-right: 24px;
    }
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 16px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: contain;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 1000;

  @media (min-width: 500px) {
    top: 35%;
    left: 20%;
  }

  > h1 {
    color: #ffffff;
    font-family: "Gotham_Ultra-Bold";
    font-size: 3rem;
  }
`;

export const Description = styled.div`
  display: grid;
  place-items: center;

  margin-top: 1.6rem;

  > p {
    color: #c0d2ff;
    font-size: 1.6rem;
    letter-spacing: 0.22em;

    :last-of-type {
      color: #c6ffd3;
      font-size: 1.6rem;
      letter-spacing: 0.22em;
      margin-top: 0.6rem;
    }
  }
`;

export const About = styled.div`
  max-width: 50rem;
  padding: 0 0.8rem;

  > p {
    color: #aeaeae;
    text-align: justify;
    font-size: 1.6rem;
    line-height: 2rem;
    margin-top: 1.6rem;
  }
`;

export const Folder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 3.2rem 0;

  > p {
    color: #c0d2ff;
    letter-spacing: 0.55em;

    margin-bottom: 0.8rem;
  }
`;

export const Contact = styled.div`
  > p {
    color: #aeaeae;
    font-size: 1.2rem;
    text-align: center;

    :last-child {
      letter-spacing: 0.14em;
      margin-top: 12px;
    }
  }
`;

export const Footer = styled.p`
  color: #aeaeae;
  font-size: 1.2rem;
  text-align: center;
  margin: 40px 0;
`;
