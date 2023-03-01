import styled from "styled-components";

const StyledLayoutView = styled.div`
  background: #F5F5F5;
  padding: 80px 16px 0;
  font-family: 'Lato', sans-serif;
  height: 100vh;

  h1 {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    color: #565C70;

    width:100%;
    padding-bottom: 20px;
    border-bottom: 1.2px solid #C9C9C9;
  }

  @media (min-width: 360px) {
    h1 {
      font-size: calc(1rem + ((1vw - 3.6px) * 0.8974));
      min-height: 0vw;
    }
  }
  
  @media (min-width: 1920px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export default StyledLayoutView;
