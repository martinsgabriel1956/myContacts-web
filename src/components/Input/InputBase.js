import styled, { css } from 'styled-components';

export const InputBase = styled.input`
  width: 100%;
  border: 0;
  border: 2px solid transparent;
  height: 3.25rem;
  border-radius: 4px;
  outline: none;
  padding-inline: 1rem;
  font-size: 1rem;
  transition: outline 0.2s ease-in;
  appearance: none;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: ${theme.shadow.primary};

    &:focus {
      border: 2px solid ${theme.colors.primary.main};
    }
  `}
`;
