import { Outlet } from 'react-router-dom';

// components
import LayoutHeader from './layoutHeader'

const Layout = () => {
  return (
    <div>
      <LayoutHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
