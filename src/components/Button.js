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
    background: ${theme.colors.primary.main};

    &:hover {
      background: ${theme.colors.primary.light};
    }

    &:active {
      background: ${theme.colors.primary.dark};
    }
  `}

  ${({ danger, theme }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}

  &:disabled {
    background: #ccc;
    cursor: default;
  }
`;
