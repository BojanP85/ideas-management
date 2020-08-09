import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-bottom: 1.2rem;
  padding: 1rem 2.5rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: 1px solid #095959;
  border-radius: 2px;
  background-color: #038a8a;
  color: #fff;
  transition: background-color 0.3s ease;
  cursor: pointer;
  outline: none;

  &:hover,
  &:active {
    background-color: #095959;
  }

  &:nth-child(2) {
    border: 1px solid #ababab;
    background-color: #c9c9c9;
    color: #000;

    &:hover,
    &:active {
      background-color: #ababab;
    }
  }
`;
