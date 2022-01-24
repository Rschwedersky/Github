import styled from 'styled-components';

export const Botao = styled.button`
  padding: 5px;
  background-color: ${({ theme, dark }) => dark?theme.colors.secondary.dark:theme.colors.secondary.light};
  cursor: pointer;
  color: ${({ theme, dark }) => dark?theme.colors.primary.dark:theme.colors.primary.light};
  border: 2px solid #37474f;
  border-radius: 3px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

export const Model = styled.div`
	z-index: auto;
	display: ${({show}) => (show ? 'block' : 'none')};
	position: fixed;
	top: 20%;
	left: 20%;
  background-color:#cfd8dc;
`;