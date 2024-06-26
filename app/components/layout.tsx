import Navbar from "./navbar";
import Footer from "./footer";
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="content">
           
            {children}
          
        </div>
      );
}
 
export default Layout;