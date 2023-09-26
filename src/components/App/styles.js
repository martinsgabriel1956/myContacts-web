import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    padding-inline: 1rem;
  }
`;
