import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 3.25rem;
  border: 0;

  font-size: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;

  transition: background 0.2s ease-in;

  ${({ theme }) => css`
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
