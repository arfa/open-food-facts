import React from 'react';
import Header, { HeaderProps} from '../Header';

interface LayoutProps extends HeaderProps {
  className?: string,
}


const Layout: React.FC<LayoutProps> = ({
  brand,
  navList,
  children,
}) => {

  return (
    <>
      <Header
        brand={brand}
        navList={navList}
        className="w-full"
      />
      <div className="container mx-auto">
        {children}
      </div>
    </>
  );
};

export default Layout;
