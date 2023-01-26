import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  Overlay,
  ModalContent,
  StyledButton,
  StyledIcon,
} from './Modal.styled';

import sprite from '../../images/svg/symbol-defs.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

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
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <StyledButton
          type="button"
          onClick={() => {
            onClose();
            // navigate(location.state?.from ?? '/');
          }}
        >
          <StyledIcon width="14" height="14">
            <use xlinkHref={sprite + '#icon-close'}></use>
          </StyledIcon>
        </StyledButton>
        {children}
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};
