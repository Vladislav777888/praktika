import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { StyledButton } from './Button.styled';

export const Button = forwardRef((prop, ref) => {
  return (
    <StyledButton type="button" ref={ref} onClick={prop.onClick}>
      {prop.children}
    </StyledButton>
  );
});

Button.propTypes = {
  prop: PropTypes.shape({
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  }),
};
