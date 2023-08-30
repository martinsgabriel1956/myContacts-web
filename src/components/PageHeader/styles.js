import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 1.5rem;

  a {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      transform: rotate(-90deg);
    }

    h1 {
      font-size: 1.5rem;
    }
  }
`;
