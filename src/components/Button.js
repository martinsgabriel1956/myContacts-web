import styled, { css } from 'styled-components';

export const Button = styled.button`
  height: 3.25rem;
  border: 0;
  padding-inline: 1rem;

  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;

  transition: background 0.2s ease-in;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.primary};
    background-color: ${theme.colors.primary.main};

    &:hover {
      background-color: ${theme.colors.primary.light};
    }

    &:active {
      background-color: ${theme.colors.primary.dark};
    }
  `}

  &:disabled {
    background: #ccc;
    cursor: default;
  }
`;
