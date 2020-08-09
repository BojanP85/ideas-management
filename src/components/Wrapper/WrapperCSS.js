import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 70%;
  overflow-x: auto;
  white-space: nowrap;

  @media(max-width: 900px) {
    width: 80%;
  }

  h4, hr {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
  }

  h4 {
    font-size: 3rem;
    font-weight: 100;
    margin: 0;

    @media(max-width: 374px) {
      font-size: 2.5rem;
    }
  }

  hr {
    margin: 3rem 0;
    height: 0.05rem;
    border: none;
    background-color: #e5e5e5;
  }
`;
