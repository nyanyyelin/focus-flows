import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

const AppLayout = () => {
  return (
    <div className="bg-mainbg h-screen text-gray-300">
      <div className="bg-windowbg flex items-center justify-between rounded-sm px-3 py-1 shadow-md">
        <Logo />
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
