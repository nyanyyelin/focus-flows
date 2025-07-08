import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Link to="/">
        <img src="Logo-Gray.png" className="h-10 w-10 rounded-xl" />
      </Link>
      <Link to="/" className="text-lg tracking-wider">
        Name
      </Link>
    </div>
  );
};

export default Logo;
