import styled from 'styled-components';

export const InnerWrapper = styled.div`
  display: flex;
  width: 100%;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  padding-right: 5rem;
  box-sizing: border-box;
  width: 50%;

  @media(max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    label {
      font-size: 2rem;
      margin-bottom: 1rem;

      span {
        color: #e00f00;
      }
    }

    input {
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      border: 1px solid #000;
      font-family: 'Quattrocento', serif;
    }

    a {
      margin-top: 3rem;

      button {
        width: 100%;
        padding: 1rem 2.5rem;
        font-size: 1.8rem;
        border: 1px solid #2277bd;
        background-color: #3498eb;
        border-radius: 2px;
        color: #fff;
        transition: background-color 0.3s ease;
        cursor: pointer;
        outline: none;

        &:hover,
        &:active {
          background-color: #2277bd;
        }
      }
    }
  }
`;

export const List = styled.div`
  width: 50%;
  padding-left: 5rem;
  box-sizing: border-box;

  @media(max-width: 768px) {
    width: 100%;
    padding-left: 0;
    margin-top: 5rem;
  }

  table {
    margin: auto;
    border-collapse: collapse;
    width: 100%;
    font-size: 2rem;
  }

  th, td {
    border-bottom: 1px solid #ddd;
    padding: 1.5rem;
  }

  th {
    padding-top: 0;
    padding-bottom: 1rem;
  }

  td {
    display: flex;
    justify-content: space-between;

    &:hover {
      background-color: #ddd;
    }

    @media(max-width: 375px) {
      font-size: 1.6rem;
    }
  }
`;
