import styled, { css } from 'styled-components';
import { InputBase } from './InputBase';

export const Input = styled(InputBase)`
  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
