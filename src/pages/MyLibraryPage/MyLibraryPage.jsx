import { Button } from 'components/Button';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ButtonWraper } from './MyLibraryPage.styled';

const MyLibraryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const btnWatchedRef = useRef();
  const btnQueueRef = useRef();

  useEffect(() => {
    if (location.pathname.includes('watched')) {
      btnWatchedRef.current.classList.add('active');
      btnQueueRef.current.classList.remove('active');
    } else if (location.pathname.includes('queue')) {
      btnWatchedRef.current.classList.remove('active');
      btnQueueRef.current.classList.add('active');
    }
  }, [location.pathname]);

  return (
    <>
      <ButtonWraper>
        <Button
          ref={btnWatchedRef}
          onClick={() => navigate('/library/watched')}
        >
          Watched
        </Button>
        <Button ref={btnQueueRef} onClick={() => navigate('/library/queue')}>
          queue
        </Button>
      </ButtonWraper>

      <Outlet />
    </>
  );
};

export default MyLibraryPage;
