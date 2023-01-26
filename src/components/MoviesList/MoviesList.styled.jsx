import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px 16px;
  }
`;

export const MovieListItem = styled.li`
  flex-basis: calc((100% - 32px) / 2);

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 32px) / 3);
  }
`;

export const StyledLink = styled(Link)`
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    display: block;
    transform: scale(1.015);
    box-shadow: 4px 3px 12px -1px rgb(255 107 8 / 50%);
  }
`;

export const Img = styled.img`
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 336px;
    height: 455px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 395px;
    height: 574px;
  }
`;

export const Title = styled.h2`
  margin-top: 10px;
  max-width: 280px;

  font-size: 12px;
  line-height: 1.1667;
  text-transform: uppercase;

  color: ${p => p.theme.colors.main_text_color};

  @media screen and (min-width: 768px) {
    max-width: 336px;
    line-height: 1.3333;
  }

  @media screen and (min-width: 1280px) {
    max-width: 395px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Info = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3333;

  color: ${p => p.theme.colors.accent_color};

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;
