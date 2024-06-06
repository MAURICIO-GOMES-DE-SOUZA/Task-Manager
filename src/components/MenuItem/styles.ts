import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
 gap: 0.8rem 1.8rem;

  &:hover{
    background: ${({ theme }) => theme.colors.PRIMARY700}44;
  cursor: pointer;
  }

  i{
    color: ${({theme}) => theme.colors.LIGHT400}44;
    font-size: 1.8rem;
  }`
 
