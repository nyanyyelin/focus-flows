import Modal from './Modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TimeForm from './TimerSetting';
import { createPortal } from 'react-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center gap-5 text-base">
        <button
          onClick={() => setIsOpen(true)}
          className="border-bordergray rounded-xl border px-3 py-1 transition-all duration-300 hover:border-gray-500 hover:text-white"
        >
          Timer Setting
        </button>
        <button className="border-bordergray rounded-xl border px-3 py-1 transition-all duration-300 hover:border-gray-500 hover:text-white">
          <Link to="/dashboard">Dashboard</Link>
        </button>
        <button className="border-bordergray rounded-xl border px-3 py-1 transition-all duration-300 hover:border-gray-500 hover:text-white">
          Profile
        </button>
      </div>
      {isOpen &&
        createPortal(
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <TimeForm />
          </Modal>,
          document.body,
        )}
    </>
  );
};

export default Navbar;
