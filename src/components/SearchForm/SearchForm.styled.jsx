import styled from 'styled-components';

export const PageHeaderInnerForm = styled.div`
  position: absolute;
  top: 108px;
  left: 50%;
  transform: translateX(-50%);
  /* margin-top: 54px;
  margin-left: auto;
  margin-right: auto; */
  width: 280px;

  @media screen and (min-width: 768px) {
    top: 121px;
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }
`;

export const Form = styled.form`
  position: relative;

  & button {
    position: absolute;

    border: none;
    background-color: transparent;
    padding: 15px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    color: ${p => p.theme.colors.text_color_white};

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.accent_color};
    }
  }

  & svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

export const FormInput = styled.input`
  padding-bottom: 4px;
  width: 100%;
  font-size: 14px;
  line-height: 1.143;
  font-weight: 400;
  color: ${p => p.theme.colors.text_color_white};
  background-color: ${p => p.theme.colors.input_background_color};
  border: none;
  border-bottom: 0.5px solid #ffffff;
  opacity: 0.8;
  outline: none;

  ::placeholder {
    padding-bottom: 4px;
    font-size: 14px;
    line-height: 1.143;
    font-weight: 400;
    color: ${p => p.theme.colors.text_color_white};
  }
`;
