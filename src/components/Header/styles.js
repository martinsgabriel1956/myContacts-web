import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 12.5625rem;
  }
`;

export const InputSearchContainer = styled.div`
  margin-top: 3rem;
  width: 100%;

  input {
    width: 100%;
    border: none;
    border-radius: 25px;
    height: 3.125rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding-inline: 1rem;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
