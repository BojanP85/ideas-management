import styled from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { GoTrashcan } from 'react-icons/go';

export const StyledTable = styled.table`
  margin-top: 2rem;
  margin-right: 2rem;
  display: inline-table;
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;

  tr {
    &:nth-child(even) {
      background-color: #f2f2f2;
    }

    &:hover {
      background-color: #ddd;
    }
  }

  th, td {
    border: 1px solid #ddd;
    padding: 1.5rem;

    &:first-child,
    &:nth-child(3) {
      padding: 1rem;
      text-align: center;
      width: 1.5rem;
    }

    &:nth-child(5),
    &:nth-child(6) {
      display: inline-block;
      width: 25rem;
    }

    &:last-child {
      padding: 0.5rem;
      text-align: center;
    }
  }

  th {
    background-color: #3498eb;
    color: #fff;
  }

  td {
    &:nth-child(5),
    &:nth-child(6) {
      white-space: pre-wrap;
      overflow: scroll;
      height: 5rem;
    }
  }
`;

export const StyledEditBtn = styled(FiEdit)`
  font-size: 2rem;
  cursor: pointer;
  margin-right: 1.5rem;

  &:hover {
    color: #bd0000;
  }
`;

export const StyledDeleteBtn = styled(GoTrashcan)`
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #bd0000;
  }
`;
