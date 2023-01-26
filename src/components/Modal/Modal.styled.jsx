import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  z-index: 120;

  visibility: visible;
  opacity: 1;

  background-color: #00000025;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 1280px) {
    background-color: transparent;
  }

  overflow: hidden;
`;

export const ModalContent = styled.div`
  display: flex;
  padding: 40px 36px;
  width: 280px;
  background-color: ${p => p.theme.colors.main_background_color};
  color: ${p => p.theme.colors.main_text_color};
  position: absolute;
  left: 50%;
  top: 50%;
  max-height: 95%;
  transform: translate(-50%, -50%);
  box-shadow: 4px 3px 12px -1px #ff6b0880;
  overflow: hidden;

  @media screen and (min-width: 320px) {
    flex-direction: column;
    gap: 20px;
    padding: 40px 20px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 704px;
    padding: 40px 72px 40px 36px;
    gap: 68px;
  }

  @media screen and (min-width: 1280px) {
    width: 806px;
    padding: 40px 12px;
    gap: 16px;
  }
`;

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: transparent;
  background-color: transparent;
  color: ${p => p.theme.colors.close_color};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent_color};
  }
`;

export const StyledIcon = styled.svg`
  fill: currentColor;
`;
