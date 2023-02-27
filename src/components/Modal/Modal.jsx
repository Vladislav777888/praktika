import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import sprite from '../../images/svg/symbol-defs.svg';
import { modalRoot } from '../../constants/refs';

import css from './Modal.module.scss';
import { useModal } from 'context/ModalContext';

export const Modal = ({ children }) => {
  const { modalActive, togleModal } = useModal();

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        togleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [togleModal]);

  return createPortal(
    <div
      className={clsx(css.backdrop, {
        [css.isActive]: modalActive,
      })}
      onClick={togleModal}
    >
      <div
        className={clsx(css.modal, {
          [css.isActive]: modalActive,
        })}
        onClick={evt => evt.stopPropagation()}
      >
        <button className={css.button} type="button" onClick={togleModal}>
          <svg className={css.icon} width="14" height="14">
            <use xlinkHref={sprite + '#icon-close'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};
