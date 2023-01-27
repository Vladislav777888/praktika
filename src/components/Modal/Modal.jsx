import { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import sprite from '../../images/svg/symbol-defs.svg';
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

  return (
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
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};
