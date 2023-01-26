// import { useEffect, useRef } from 'react';
import { Outlet /* useLocation useNavigate*/ } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import {
  PageHeader,
  Container,
  PageHeaderInnerNav,
  StyledLinkLogo,
  LogoSvg,
  LogoText,
  SiteNav,
  SiteNavItem,
  StyledLinkNav,
  // ButtonWraper,
} from './Layout.styled';

import sprite from '../../images/svg/symbol-defs.svg';

export const Layout = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const btnWatchedRef = useRef();
  // const btnQueueRef = useRef();

  // useEffect(() => {
  //   if (location.pathname.includes('watched')) {
  //     btnWatchedRef.current.classList.add('active');
  //     btnQueueRef.current.classList.remove('active');
  //   } else if (location.pathname.includes('queue')) {
  //     btnWatchedRef.current.classList.remove('active');
  //     btnQueueRef.current.classList.add('active');
  //   }
  // }, [location.pathname]);

  return (
    <>
      <PageHeader>
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
          {/* {!location.pathname.includes('library') ? (
            <SearchForm onSubmit={updateQueryString} />
          ) : (
            <ButtonWraper>
              <Button
                ref={btnWatchedRef}
                onClick={() => navigate('/library/watched')}
              >
                Watched
              </Button>
              <Button
                ref={btnQueueRef}
                onClick={() => navigate('/library/queue')}
              >
                queue
              </Button>
            </ButtonWraper>
          )} */}
        </Container>
      </PageHeader>

      <ToastContainer />
      <Outlet />
    </>
  );
};
