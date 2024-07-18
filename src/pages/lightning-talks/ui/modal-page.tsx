'use client';

import { ComponentProps, useState } from 'react';

import { Modal } from '@/shared/ui/compound-modal';
import BasicModal from '@/shared/ui/modal';

export const ModalPage = () => {
  return (
    <>
      <CompoundModalSample />
      <BasicModalSample />
    </>
  );
};

const CompoundModalSample = () => {
  const [modal, setModal] = useState<'visible' | 'hidden'>('hidden');

  const closeModal = () => setModal('hidden');

  return (
    <>
      <button
        className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={() => setModal('visible')}
      >
        モーダルを開く（Compound Pattern）
      </button>
      {modal === 'visible' && (
        <Modal onClickBackGround={closeModal}>
          <Modal.CloseButton onClick={closeModal} />
          <Modal.Header>システムメンテナンスのお知らせ</Modal.Header>
          <Modal.Body>
            <p>
              平素より弊社サービスをご利用いただき、誠にありがとうございます。
              <br />
              下記の日程でシステムメンテナンスを実施いたします。メンテナンス期間中はサービスのご利用ができなくなりますので、ご注意ください。
              <br />
              <br />
              【メンテナンス日時】
              <br />
              2024年8月1日（木） 午前2:00 ～ 午前5:00
              <br />
              <br />
              ご不便をおかけいたしますが、ご理解とご協力のほど、よろしくお願いいたします。
            </p>
          </Modal.Body>
          <Modal.Footer onClickCancel={closeModal} />
        </Modal>
      )}
    </>
  );
};

const BasicModalSample = () => {
  const [modal, setModal] = useState<'visible' | 'hidden'>('hidden');

  const closeModal = () => setModal('hidden');

  return (
    <>
      <button
        className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center 
          align-middle font-sans text-xs font-bold uppercase text-white shadow-md 
          shadow-gray-900/10 transition-all hover:shadow-lg 
          hover:shadow-gray-900/20 active:opacity-[0.85] 
          disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={() => setModal('visible')}
      >
        モーダルを開く（Basic Pattern）
      </button>
      {modal === 'visible' && (
        <BasicModal onClose={closeModal}>
          <Heading as="h2">
            <h2>システムメンテナンスのお知らせ</h2>
          </Heading>
          <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed text-blue-gray-500">
            <p>
              平素より弊社サービスをご利用いただき、誠にありがとうございます。
              <br />
              下記の日程でシステムメンテナンスを実施いたします。メンテナンス期間中はサービスのご利用ができなくなりますので、ご注意ください。
              <br />
              <br />
              【メンテナンス日時】
              <br />
              2024年8月1日（木） 午前2:00 ～ 午前5:00
              <br />
              <br />
              ご不便をおかけいたしますが、ご理解とご協力のほど、よろしくお願いいたします。
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
            <Button variant="delete">キャンセル</Button>
          </div>
        </BasicModal>
      )}
    </>
  );
};

const Heading = ({
  children,
  as,
  ...props
}: { as: 'h2' } & ComponentProps<'h1'>) => {
  const Component = as;

  return (
    <Component
      className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900"
      {...props}
    >
      {children}
    </Component>
  );
};

const Button = ({
  children,
  ...props
}: ComponentProps<'button'> & { variant: 'delete' }) => {
  return (
    <button
      className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      {...props}
    >
      {children}
    </button>
  );
};
