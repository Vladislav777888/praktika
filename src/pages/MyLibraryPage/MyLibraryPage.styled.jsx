import styled from 'styled-components';

export const ButtonWraper = styled.div`
  position: absolute;
  top: 124px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    top: 121px;
  }
`;
