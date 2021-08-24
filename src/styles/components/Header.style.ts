import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;

  > div {
    a {
      display: flex;
      align-items: center;
    }

    svg {
      width: 40px;
      height: 40px;

      margin-right: 8px;
    }

    .logo {
      display: flex;
      flex-direction: column;

      color: #c0d2ff;
    }
  }

  a {
    color: #525252;
    font-size: 1.6rem;

    :hover {
      transform: scale(1.1);
    }
  }
`;

export const NameLink = styled.a`
  display: inline-block;
  color: #525252;
  font-size: 1.6rem;

  :hover {
    transform: scale(1.1);
  }
`;
