import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import {
  PageHeaderHome,
  PageHeaderLibrary,
  Container,
  PageHeaderInnerNav,
  StyledLinkLogo,
  LogoSvg,
  LogoText,
  SiteNav,
  SiteNavItem,
  StyledLinkNav,
} from './Layout.styled';

import sprite from '../../images/svg/symbol-defs.svg';

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes('library') ? (
        <PageHeaderLibrary>
          <Container>
            <PageHeaderInnerNav>
              <StyledLinkLogo href="/praktika">
                <LogoSvg width="24" height="24">
                  <use xlinkHref={sprite + '#icon-film'}></use>
                </LogoSvg>
                <LogoText>Filmoteka</LogoText>
              </StyledLinkLogo>

              <SiteNav>
                <ul>
                  <SiteNavItem>
                    <StyledLinkNav to="/">Home</StyledLinkNav>
                  </SiteNavItem>
                  <SiteNavItem>
                    <StyledLinkNav
                      to="/library" /*onClick={() => setMovies([])}*/
                    >
                      my library
                    </StyledLinkNav>
                  </SiteNavItem>
                </ul>
              </SiteNav>
            </PageHeaderInnerNav>
          </Container>
        </PageHeaderLibrary>
      ) : (
        <PageHeaderHome>
          <Container>
            <PageHeaderInnerNav>
              <StyledLinkLogo href="/praktika">
                <LogoSvg width="24" height="24">
                  <use xlinkHref={sprite + '#icon-film'}></use>
                </LogoSvg>
                <LogoText>Filmoteka</LogoText>
              </StyledLinkLogo>

              <SiteNav>
                <ul>
                  <SiteNavItem>
                    <StyledLinkNav to="/">Home</StyledLinkNav>
                  </SiteNavItem>
                  <SiteNavItem>
                    <StyledLinkNav
                      to="/library" /*onClick={() => setMovies([])}*/
                    >
                      my library
                    </StyledLinkNav>
                  </SiteNavItem>
                </ul>
              </SiteNav>
            </PageHeaderInnerNav>
          </Container>
        </PageHeaderHome>
      )}

      <ToastContainer />
      <Outlet />
    </>
  );
};
