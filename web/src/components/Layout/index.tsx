import React, { ReactNode } from 'react';
import About from '../About';
import Footer from '../Footer';
 
interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <About />
      <Footer />
    </div>
  );
};

export default Layout;