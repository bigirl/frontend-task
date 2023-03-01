import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color:#ffffff;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;

  z-index: 1000;

  img {
    margin: 12px 20px;
    cursor: pointer;
    max-height: 27px;
  }
`;

export default StyledHeader;
