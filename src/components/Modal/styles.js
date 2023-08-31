import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  border-radius: 4px;
  padding: 1.5rem;
  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: ${theme.shadow.primary};

  `}

  h1 {
    font-size: 1.375rem;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])};
  }

  p {
    margin-top: 0.5rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.5rem;

  .cancel-button {
    background: transparent;
    border: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
