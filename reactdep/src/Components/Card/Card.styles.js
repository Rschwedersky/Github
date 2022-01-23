import styled from 'styled-components';

export const Botao = styled.button`
  padding: 5px;
  background-color: ${({ theme, dark }) => dark?theme.colors.secondary.dark:theme.colors.secondary.light};
  cursor: pointer;
  color: ${({ theme, seguindo }) => seguindo?theme.colors.primary.dark:theme.colors.primary.light};
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;