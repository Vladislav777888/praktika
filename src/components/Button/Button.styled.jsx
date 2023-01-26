import styled from 'styled-components';

export const StyledButton = styled.button`
  padding-left: 36px;
  padding-right: 36px;
  min-height: 44px;
  min-width: 129px;

  display: block;

  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3333;
  text-transform: uppercase;
  background-color: transparent;
  color: ${p => p.theme.colors.text_color_white};
  text-align: center;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${p => p.theme.colors.text_color_white};
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding-left: 46px;
    padding-right: 46px;
    min-width: 152px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 41px;
    padding-right: 41px;
    min-width: 148px;
  }

  & + & {
    margin-left: 20px;

    @media screen and (min-width: 768px) {
      margin-left: 32px;
    }

    @media screen and (min-width: 1280px) {
      margin-left: 16px;
    }
  }

  &.active {
    background-color: ${p => p.theme.colors.accent_color};
    border-color: ${p => p.theme.colors.accent_color};
  }
`;
