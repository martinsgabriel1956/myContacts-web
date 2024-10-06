import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 1rem;

  strong {
    color: #222;
    font-size: 1.5rem;
  }

  a {
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    ${({ theme }) => css`
      color: ${theme.colors.primary.main};
      border: 2px solid ${theme.colors.primary.main};

      &:hover {
        background-color: ${theme.colors.primary.main};
        color: ${theme.colors.white};
      }
    `}
  }
`;
