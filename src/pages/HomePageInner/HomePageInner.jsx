import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Pagination, Stack } from '@mui/material';

import { STATUS } from 'constants/status';
import { BASE_POSTER_URL, FAKE_POSTER } from 'constants/baseUrl';
import { LOCALSTORAGE_KEY_GENRES } from 'constants/localStorageKeys';
import { fetchGenres, getSearchMovies, getTrendingMovies } from 'services';

import { NotFound } from 'components/NotFound';
import { Loader } from 'components/Loader';
import { SearchForm } from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

import { Section, Container, Title } from './HomePageInner.styled';

// жанры
let filmGenres = [];

window.addEventListener('DOMContentLoaded', async () => {
  await fetchGenres()
    .then(array => {
      localStorage.setItem(LOCALSTORAGE_KEY_GENRES, JSON.stringify(array));
    })
    .catch(err => console.log(err));

  filmGenres = await JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_GENRES));
});

const HomePageInner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [status, setStatus] = useState(STATUS.idle);
  const [pageQty, setPageQty] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const page = Number(searchParams.get('page')) || 1;
  const query = searchParams.get('query') ?? '';

  // для вычисления ширины дивайса
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // для запроса трендовых фильмов
  useEffect(() => {
    if (query !== '') {
      return;
    }

    const fetchTrending = async () => {
      setStatus(STATUS.loading);

      try {
        const data = await getTrendingMovies({ page });

        if (data.results.length === 0) {
          throw new Error('We have nothing for this search');
        }

        setPageQty(data.total_pages);
        setMovies(
          data.results.map(
            ({ poster_path, title, release_date, genre_ids, id }) => {
              let genresArray = [];
              let genres = '';
              // eslint-disable-next-line array-callback-return
              filmGenres.map(genre => {
                if (genre_ids.includes(genre['id'])) {
                  return genresArray.push(genre['name']);
                }
              });

              genres = genresArray.join(', ');

              if (!genre_ids || genre_ids.length === 0) {
                // eslint-disable-next-line no-unused-vars
                genres = 'genre unknown';
              }

              if (!poster_path) {
                poster_path = FAKE_POSTER;
              } else {
                poster_path = BASE_POSTER_URL + poster_path;
              }

              if (!title) {
                title = 'no name';
              }

              if (!release_date) {
                release_date = '';
              }

              return { poster_path, title, release_date, genres, id };
            }
          )
        );

        setStatus(STATUS.success);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };

    fetchTrending();
  }, [page, query]);

  // для запроса по ключевому слову
  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchSearchMovies = async () => {
      setStatus(STATUS.loading);

      try {
        const data = await getSearchMovies({ page, query });

        if (data.results.length === 0) {
          toast.error('You entered the wrong movie title');
          throw new Error('We have nothing for this search');
        }

        setPageQty(data.total_pages);

        setMovies(
          data.results.map(
            ({ poster_path, title, release_date, genre_ids, id }) => {
              let genresArray = [];
              let genres = '';
              // eslint-disable-next-line array-callback-return
              filmGenres.map(genre => {
                if (genre_ids.includes(genre['id'])) {
                  return genresArray.push(genre['name']);
                }
              });

              genres = genresArray.join(', ');

              if (!genre_ids || genre_ids.length === 0) {
                // eslint-disable-next-line no-unused-vars
                genres = 'genre unknown';
              }

              if (!poster_path) {
                poster_path = FAKE_POSTER;
              } else {
                poster_path = BASE_POSTER_URL + poster_path;
              }

              if (!title) {
                title = 'no name';
              }

              if (!release_date) {
                release_date = '';
              }

              return { poster_path, title, release_date, genres, id };
            }
          )
        );

        setStatus(STATUS.success);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };

    fetchSearchMovies();
  }, [page, query]);

  const onMovieClick = id => {
    setMovieId(id);

    if (!location.pathname.includes('library')) {
      navigate(`/?page=${page}&query=${query}`);
    }
  };

  const updateQuery = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      {status === STATUS.success && (
        <>
          <SearchForm onSubmit={updateQuery} />
          <Section>
            <Container>
              <Title>Filmoteka</Title>
              <MoviesList
                movies={movies}
                onClick={onMovieClick}
                movieId={movieId}
              />
            </Container>
          </Section>

          <Box
            display="flex"
            justifyContent="center"
            pb={windowWidth < 768 ? '20px' : '60px'}
          >
            <Stack spacing={2}>
              {!!pageQty && (
                <Pagination
                  count={pageQty}
                  page={page}
                  onChange={(_, num) => {
                    setSearchParams({ page: num, query });
                  }}
                  showFirstButton={windowWidth < 768 ? false : true}
                  showLastButton={windowWidth < 768 ? false : true}
                  hidePrevButton={windowWidth < 768 ? true : false}
                  hideNextButton={windowWidth < 768 ? true : false}
                  color="primary"
                />
              )}
            </Stack>
          </Box>
        </>
      )}

      {status === STATUS.error && <NotFound />}

      {status === STATUS.loading && <Loader />}
    </>
  );
};

export default HomePageInner;
