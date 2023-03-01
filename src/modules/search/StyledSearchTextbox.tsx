import styled from "styled-components";

const StyledSearchTextbox = styled.div`
  --max--width: 622px;

  margin: 8px 0;

  &.inputWithIcon {
    position: relative;
    max-width:  var(--max--width);
  }

  .left-icon {
    margin-left: 18px;
    position: absolute;
    top: 7px;

    transform: scale(.8);

    svg {
      fill: #909090;
      transition: 0.3s;
    }
  }

  button.right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: #909090;
      transition: 0.3s;
    }
  }

  input {
    
    font-size: 14px;
    line-height: 150%;
    Letter spacing: 0.5px

    color: #909090;
    width: 100%;
    border: 1px solid #C9C9C9;
    border-radius: 4px;

    padding: 7px 44px;
    outline: none;
    
    box-sizing: border-box;
    transition: 0.3s;
    
    padding-left: 50px;
    cursor: pointer;

    &:focus {
      border-color: dodgerBlue;
      box-shadow: 0 0 8px 0 dodgerBlue;
    }

    :focus + .left-icon {
      svg {
        fill: dodgerBlue;
      }
    }
  }
`;

export default StyledSearchTextbox;
