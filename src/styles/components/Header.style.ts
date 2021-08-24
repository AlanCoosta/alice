import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 4rem;
`;

export const MyFolderLink = styled.a`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;

  cursor: pointer;
  text-decoration: none;

  color: #c0d2ff;
`;

export const NameLink = styled.a`
  display: inline-block;
  color: #525252;
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: none;
`;
