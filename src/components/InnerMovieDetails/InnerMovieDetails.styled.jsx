import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 5px;
  height: 100%;
  @media screen and (min-width: 320px) {
    width: 240px;
  }
  @media screen and (min-width: 768px) {
    width: 264px;
  }
  @media screen and (min-width: 1280px) {
    width: 375px;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 320px) {
    width: 240px;
  }
  @media screen and (min-width: 768px) {
    width: 264px;
  }
  @media screen and (min-width: 1280px) {
    width: 375px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
  line-height: 1.15;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 30px;
    line-height: 1.16667;
  }
`;

export const ModalData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  // @include fonts(12px, 16px, 500);
  font-size: 12px;
  line-height: 1.33333;
  font-weight: 500;
`;

export const ModalDataInfo = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ModalDataInfoGrey = styled.span`
  color: ${p => p.theme.colors.secondary_background_color};
  width: 108px;
`;

export const ModalDataNumber = styled.span`
  font-size: 12px;
  line-height: 1.166667;
`;

export const ModalDataRatio = styled.span`
  padding: 1px 9px;
  border-radius: 5px;
  color: ${p => p.theme.colors.text_color_white};
  background-color: ${p => p.theme.colors.accent_color};
`;

export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  line-height: 1.33333;
  font-weight: 500;
`;

export const ModalDescriptionTitle = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const ModalButtonPlay = styled.button`
  width: 40px;
  border: none;
  padding: 0;
`;

export const ModalButtonsWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 15px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: start;
    margin-left: 8px;
  }
`;

export const ModalDescriptionAbout = styled.p`
  font-size: 12px;
  line-height: 1.666666;
  font-weight: 500;
  overflow-y: auto;
  max-height: 80px;

  @media screen and (min-width: 768px) {
    max-height: 95px;
  }

  @media screen and (min-width: 1280px) {
    max-height: 320px;
  }
`;

export const ModalButton = styled.button`
  font-size: 12px;
  line-height: 1.33333;
  font-weight: 500;
  color: ${p => p.theme.colors.main_text_color};
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${p => p.theme.colors.main_background_color};
  width: 110px;
  height: 44px;
  padding: 5px;
  cursor: pointer;

  :hover,
  :focus {
    color: ${p => p.theme.colors.text_color_white};
    border: 1px solid orange;
    background-color: ${p => p.theme.colors.accent_color};
  }

  :disabled {
    background-color: ${p => p.theme.colors.grey};
    border-color: ${p => p.theme.colors.grey};
    color: ${p => p.theme.colors.text_color_white};
    cursor: auto;

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.grey};
      border-color: ${p => p.theme.colors.grey};
    }
  }

  @media screen and (min-width: 768px) {
    width: 125px;
  }

  @media screen and (min-width: 1280px) {
    width: 136px;
  }
`;
