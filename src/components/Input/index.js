import styled, { css } from 'styled-components';
import { InputBase } from './InputBase';

export const Input = styled(InputBase)`
  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }
`;
