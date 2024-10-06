import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;
  }
`;
