import styled, { css } from 'styled-components';

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
