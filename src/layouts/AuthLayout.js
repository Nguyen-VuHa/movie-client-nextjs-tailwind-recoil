import React from "react";

const AuthLayout = ({ children }) => {
    return (
      <>
        {/* Include components for authenticated users */}
        {children}
      </>
    );
};
  
export default AuthLayout;