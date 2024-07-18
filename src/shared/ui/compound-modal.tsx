// @ref: https://medium.com/@cassiecoding/react-design-pattern-compound-component-9c32df41fd8d

import { FC, ReactElement, ReactNode, type PropsWithChildren } from 'react';
import { Icon } from './icon';

type ModalCompound = {
  CloseButton: (props: ModalCloseButtonProps) => ReactElement;
  Header: (props: ModalHeaderProps) => ReactElement;
  Body: (props: ModalBodyProps) => ReactElement;
  Footer: (props: ModalFooterProps) => ReactElement;
};

type ModalProps = {
  children: ReactNode;
  onClickBackGround?: () => void;

};

const Modal = ({ onClickBackGround, children }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-10 grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClickBackGround}
    >
      <dialog
        open
        className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
};

type ModalCloseButtonProps = {
  onClick: () => void;
};

const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => {
  return (
    <button
      className="absolute right-4 top-4 cursor-pointer z-20"
      onClick={onClick}
    >
      <Icon variant="close" className="text-black" />
    </button>
  );
};

type ModalHeaderProps = PropsWithChildren;

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
      {children}
    </div>
  );
};

type ModalBodyProps = PropsWithChildren;

const ModalBody = ({ children }: ModalBodyProps) => {
  return (
    <div className='className="relative p-4 font-sans text-base antialiased font-light leading-relaxed text-blue-gray-500'>
      {children}
    </div>
  );
};

type ModalFooterProps = PropsWithChildren<{
  actions?: ReactElement;
  onClickCancel: () => void;
}>;

const ModalFooter = ({ onClickCancel, actions }: ModalFooterProps) => {
  return (
    <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
      <button
        data-ripple-dark="true"
        data-dialog-close="true"
        className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={onClickCancel}
      >
        キャンセル
      </button>
      {actions}
    </div>
  );
};

Modal.CloseButton = ModalCloseButton;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
