import { Link } from "react-router-dom";
import StyledHeader from "./StyledHeader";
import routesApp from "../../../contexts/navigation/routesApp";
import DropitLogo from "../../../tools/assets/logo-dropit-business.svg";
import { Counter } from "../counter/Counter";

const Header = () => {
    return (
      <StyledHeader>
          <Link to={routesApp.getHome()}>
            <img src={DropitLogo} alt="logo" />
          </Link>
          <Counter/>
      </StyledHeader>
    );
  };
  
  export default Header;