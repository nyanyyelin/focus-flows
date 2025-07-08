import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-5 text-base">
      <button className="hover:text-white">Timer Setting</button>
      <button className="hover:text-white">
        <Link to="/dashboard">Dashboard</Link>
      </button>
      <button className="hover:text-white">Profile</button>
    </div>
  );
};

export default Navbar;
