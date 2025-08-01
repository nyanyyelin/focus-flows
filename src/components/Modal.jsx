import { RxCross2 } from 'react-icons/rx';
const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    // backdrop
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/20"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-windowbg border-bordergray rounded-2xl border"
      >
        <button onClick={onClose}>
          <RxCross2 className="text-2xl text-white" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
