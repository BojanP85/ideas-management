import styled from 'styled-components';

export const Form = styled.form`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media(max-width: 426px) {
    width: 90%;
  }
`;

export const Inputs = styled.div`
  margin: auto;
  width: 60%;
  margin-bottom: 4rem;

  @media(max-width: 768px) {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;

    &:nth-child(3) {
      label {
        display: flex;

        span {
          margin-left: 1.5rem;

          a {
            color: #000;
          }
        }
      }
    }
  }

  label {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  input, select, option, textarea {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    font-family: 'Quattrocento', serif;
  }

  textarea {
    resize: none;
  }
`;

export const Buttons = styled.div`
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 100%;
  }
`;
