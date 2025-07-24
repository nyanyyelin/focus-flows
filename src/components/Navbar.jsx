import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-5 text-base">
      <button className="border-bordergray rounded-xl border px-3 py-1 transition-all duration-300 hover:border-gray-500 hover:text-white">
        <Link to="/dashboard">Timer Setting</Link>
      </button>
      <button className="border-bordergray rounded-xl border px-3 py-1 transition-all duration-300 hover:border-gray-500 hover:text-white">
        <Link to="/dashboard">Dashboard</Link>
      </button>
      <button className="border-bordergray rounded-xl border px-3 py-1 transition-all duration-300 hover:border-gray-500 hover:text-white">
        Profile
      </button>
    </div>
  );
};

export default Navbar;
