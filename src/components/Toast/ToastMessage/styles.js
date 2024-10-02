import styled, { css } from 'styled-components';

const CONTAINER_VARIANTS = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
  `,
};

export const Container = styled.div`
  padding: 1rem 2rem;

  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  ${({ type }) => CONTAINER_VARIANTS[type] || CONTAINER_VARIANTS.default}

  & + & {
    margin-top: 0.75rem;
  }
`;
