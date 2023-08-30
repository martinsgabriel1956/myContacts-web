import styled from 'styled-components';

export const InputBase = styled.input`
  width: 100%;
  border: 0;
  border: 2px solid transparent;
  background: #fff;
  height: 3.25rem;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  padding-inline: 1rem;
  font-size: 1rem;
  transition: outline 0.2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
