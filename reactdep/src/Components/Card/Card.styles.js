import styled from 'styled-components';

export const Botao = styled.button`
  padding: 5px;
  background-color: ${({ theme, dark }) => dark?theme.colors.secondary.dark:theme.colors.secondary.light};
  cursor: pointer;
  color: ${({ theme, seguindo }) => seguindo?'#7f0000':'blue'};
  border: 2px solid #37474f;
  border-radius: 3px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

export const Li = styled.li`
  list-style-type: none;
`;