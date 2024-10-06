import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    border: none;
    border-radius: 25px;
    height: 3.125rem;
    box-shadow: ${({ theme }) => theme.shadow.primary};
    outline: 0;
    padding-inline: 1rem;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
