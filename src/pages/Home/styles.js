import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  position: relative;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ hasError }) => (hasError ? 'flex-end' : 'space-between')};
  margin-top: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 1rem;

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
        color: ${theme.colors.white};
      }
    `}
  }
`;

export const ListHeader = styled.header`
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

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0)')};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: ${theme.shadow.primary};
  `}

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
        `}

        font-weight: bold;
        text-transform: uppercase;
        padding: 0.25rem;
        border-radius: 2px;
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

export const ErrorContainer = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;

  .details {
    margin-left: 1.5rem;

    strong {
      font-size: 1.375rem;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 0.5rem;
    }
  }
`;
