import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import sprite from '../../images/svg/symbol-defs.svg';
import { modalRoot } from '../../constants/refs';

import css from './Modal.module.scss';

export const Modal = ({ onClose, children, active }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className={clsx(css.backdrop, {
        [css.isActive]: active,
      })}
      onClick={onClose}
    >
      <div
        className={clsx(css.modal, {
          [css.isActive]: active,
        })}
        onClick={evt => evt.stopPropagation()}
      >
        <button className={css.button} type="button" onClick={onClose}>
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
  onClose: PropTypes.func,
};
