import React from "react";
import StyledLayoutView from './StyledLayoutView';
import Header from '../../modules/common/header';

const LayoutView = <P extends object>(Component: React.ComponentType<P>) => {
  return (hocProps: P) => {
    return (
      <StyledLayoutView>
        <Header />
        <Component {...hocProps} /> 
      </StyledLayoutView>
    );
  };
};

const Layout: React.FC<{children: JSX.Element;}> = ({children}) => {
  const UseHOC = LayoutView(() => <>{children}</>);
  return (
    <>
      <UseHOC>{children}</UseHOC>
    </>
  );
};

export default Layout;
