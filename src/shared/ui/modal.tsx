import React from 'react';
import { Icon } from './icon';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div
      className="
        fixed inset-0 z-10 grid h-screen w-screen place-items-center 
        bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300
      "
      onClick={onClose}
    >
      <dialog
        open
        className="
          relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans 
          text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 cursor-pointer z-20"
          onClick={onClose}
        >
          <Icon variant="close" className="text-black" />
        </button>
        {children}
      </dialog>
    </div>
  );
};

// importする側で名前を書きたいためにexport defaultを使用している
export default Modal;
