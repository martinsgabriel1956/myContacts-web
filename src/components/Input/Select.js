import styled from 'styled-components';
import { InputBase } from './InputBase';

export const Select = styled(InputBase).attrs({
  as: 'select',
})`
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    opacity: 1;
  }
`;
