import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { STATUS } from 'constants/status';
import { BASE_POSTER_URL, FAKE_POSTER } from 'constants/baseUrl';
import { LOCALSTORAGE_KEY_GENRES } from 'constants/localStorageKeys';
import { fetchGenres, getSearchMovies, getTrendingMovies } from 'services';

import { NotFound } from 'components/NotFound';
import { Loader } from 'components/Loader';
import MoviesList from 'components/MoviesList';

import {
  Section,
  Container,
  Title,
} from '../../pages/HomePage/HomePage.styled';

// жанры
let genres = [];

const HomePageInner = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    const fetchTrending = async () => {
      setStatus(STATUS.loading);

      await fetchGenres()
        .then(array => {
          localStorage.setItem(LOCALSTORAGE_KEY_GENRES, JSON.stringify(array));
        })
        .catch(err => console.log(err));

      genres = await JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_GENRES));

      try {
        const { results } = await getTrendingMovies();

        if (results.length === 0) {
          throw new Error('We have nothing for this search');
        }

        setMovies(
          results.map(({ poster_path, title, release_date, genre_ids, id }) => {
            let genresArray = [];
            let filmGenres = '';
            // eslint-disable-next-line array-callback-return
            genres.map(genre => {
              if (genre_ids.includes(genre['id'])) {
                return genresArray.push(genre['name']);
              }
            });

            filmGenres = genresArray.join(', ');

            if (!genre_ids || genre_ids.length === 0) {
              // eslint-disable-next-line no-unused-vars
              filmGenres = 'genre unknown';
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

            return { poster_path, title, release_date, filmGenres, id };
          })
        );
        setStatus(STATUS.success);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };

    fetchTrending();
  }, []);

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchSearchMovies = async () => {
      setStatus(STATUS.loading);
      const genres = await JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEY_GENRES)
      );

      try {
        const { results } = await getSearchMovies({ query });

        if (results.length === 0) {
          toast.error('You entered the wrong movie title');
          throw new Error('We have nothing for this search');
        }

        setMovies(
          results.map(({ poster_path, title, release_date, genre_ids, id }) => {
            let genresArray = [];
            let filmGenres = '';
            // eslint-disable-next-line array-callback-return
            genres.map(genre => {
              if (genre_ids.includes(genre['id'])) {
                return genresArray.push(genre['name']);
              }
            });

            filmGenres = genresArray.join(', ');

            if (!genre_ids || genre_ids.length === 0) {
              // eslint-disable-next-line no-unused-vars
              filmGenres = 'genre unknown';
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

            return { poster_path, title, release_date, filmGenres, id };
          })
        );

        setStatus(STATUS.success);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };

    fetchSearchMovies();
  }, [query]);

  const onMovieClick = id => {
    setMovieId(id);
  };

  return (
    <>
      {status === STATUS.success && (
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
      )}

      {status === STATUS.error && <NotFound />}

      {status === STATUS.loading && <Loader />}
    </>
  );
};

export default HomePageInner;
