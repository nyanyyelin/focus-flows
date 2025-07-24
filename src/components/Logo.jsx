import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 transition-all duration-300 hover:text-white">
      <Link to="/">
        <img src="Logo-Gray.png" className="h-10 w-10 rounded-xl" />
      </Link>
      <Link to="/" className="text-lg tracking-widest">
        CHRONOFLOW
      </Link>
    </div>
  );
};

export default Logo;
