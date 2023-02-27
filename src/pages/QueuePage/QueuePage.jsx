import { useState } from 'react';

import { LOCALSTORAGE_KEY_QUEUE } from 'constants/localStorageKeys';
import {
  Section,
  Container,
  Title,
} from '../../pages/HomePageInner/HomePageInner.styled';
import MoviesList from 'components/MoviesList';
import noImage from '../../images/no-poster/no-poster.png';
import { Box } from 'components/Box';

const QueuePage = () => {
  const [movies, setMovies] = useState(
    () => JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_QUEUE)) ?? ''
  );
  const [movieId, setMovieId] = useState(null);

  const onMovieClick = id => {
    setMovieId(id);
  };

  return (
    <>
      <Section>
        <Container>
          <Title>Filmoteka</Title>
          {movies.length > 0 ? (
            <MoviesList
              movies={movies}
              onClick={onMovieClick}
              movieId={movieId}
              deleteMovie={setMovies}
            />
          ) : (
            <Box display="flex" justifyContent="center" alignItems="center">
              <img src={noImage} alt="no films" style={{ width: 200 }} />
            </Box>
          )}
        </Container>
      </Section>
    </>
  );
};

export default QueuePage;
