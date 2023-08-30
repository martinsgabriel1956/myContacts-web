import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: #222;
    font-size: 1.5rem;
  }

  a {
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    ${({ theme }) => css`
      color: ${theme.colors.primary.main};
      border: 2px solid ${theme.colors.primary.main};

      &:hover {
        background-color: ${theme.colors.primary.main};
      }
    `}

    &:hover {
      color: #FFF;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 1.5rem;

  button {
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const Card = styled.div`
  background: #FFF;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;

      small {
        ${({ theme }) => css`
          background: ${theme.colors.primary.lighter};
          color: ${theme.colors.primary.main};
          font-weight: bold;
          text-transform: uppercase;
          padding: 0.25rem;
          border-radius: 2px;
        `}
      }
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    button {
      background: transparent;
      border: 0;
    }
  }
`;
