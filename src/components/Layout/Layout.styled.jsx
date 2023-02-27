import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import img from '../../images/header/header_main320.png';
import img1 from '../../images/header/header_main320@2x.png';
import img2 from '../../images/header/header_main768.png';
import img3 from '../../images/header/header_main768@2x.png';
import img4 from '../../images/header/header_main1280.png';
import img5 from '../../images/header/header_main1280@2x.png';

import img6 from '../../images/header/header_library320.png';
import img7 from '../../images/header/header_library320@2x.png';
import img8 from '../../images/header/header_library768.png';
import img9 from '../../images/header/header_library768@2x.png';
import img10 from '../../images/header/header_library1280.png';
import img11 from '../../images/header/header_library1280@2x.png';

export const PageHeaderHome = styled.div`
  width: 100%;
  min-height: 230px;
  background-color: ${p => p.theme.colors.secondary_background_color};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 40px;

  background-image: url('${img}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 2dppx),
    (min-resolution: 192dpi) {
    background-image: url('${img1}');
  }

  @media screen and (min-width: 768px) {
    background-image: url('${img2}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 2dppx),
      (min-resolution: 192dpi) {
      background-image: url('${img3}');
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url('${img4}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 2dppx),
      (min-resolution: 192dpi) {
      background-image: url('${img5}');
    }
  }
`;

export const PageHeaderLibrary = styled.div`
  width: 100%;
  min-height: 230px;
  background-color: ${p => p.theme.colors.secondary_background_color};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 40px;

  background-image: url('${img6}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 2dppx),
    (min-resolution: 192dpi) {
    background-image: url('${img7}');
  }

  @media screen and (min-width: 768px) {
    background-image: url('${img8}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 2dppx),
      (min-resolution: 192dpi) {
      background-image: url('${img9}');
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url('${img10}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 2dppx),
      (min-resolution: 192dpi) {
      background-image: url('${img11}');
    }
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const PageHeaderInnerNav = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLinkLogo = styled.a`
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.text_color_white};

  :hover {
    color: ${p => p.theme.colors.accent_color};
  }
`;

export const LogoSvg = styled.svg`
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }

  fill: currentColor;
`;

export const LogoText = styled.span`
  display: none;
  font-size: 30px;
  line-height: 1.1667;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const SiteNav = styled.nav`
  margin-left: auto;

  > ul {
    display: flex;
    align-items: center;
  }
`;

export const SiteNavItem = styled.li`
  & + & {
    margin-left: 39px;
  }
`;

export const StyledLinkNav = styled(NavLink)`
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.667;
  color: ${p => p.theme.colors.text_color_white};
  text-transform: uppercase;

  :hover {
    color: ${p => p.theme.colors.accent_color};
  }

  &.active {
    position: relative;

    &::after {
      position: absolute;
      bottom: -3px;

      display: block;
      width: 100%;
      height: 3px;
      background-color: ${p => p.theme.colors.text_color_error};
      content: '';
    }
  }
`;
