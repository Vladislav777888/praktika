import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';
import MovieDetails from 'components/MovieDetails';

import { bodyRef } from 'constants/refs';

import {
  List,
  MovieListItem,
  StyledLink,
  Img,
  Title,
  Info,
} from './MoviesList.styled';
import { useModal } from 'context/ModalContext';

const MoviesList = ({ movies, onClick, movieId, deleteMovie }) => {
  const { modalActive, togleModal } = useModal();

  if (modalActive) {
    bodyRef.style.overflow = 'hidden';
  } else {
    bodyRef.style.overflow = 'auto';
  }

  return (
    <>
      <List>
        {movies.map(({ poster_path, title, release_date, genres, id }) => (
          <MovieListItem key={id} onClick={() => onClick(id)}>
            <StyledLink onClick={togleModal}>
              <Img src={poster_path} alt={title} loading="lazy" />
              <Title>{title}</Title>
              <Info>{genres}</Info>
              <Info> | </Info>
              <Info>{release_date.split('-')[0]}</Info>
            </StyledLink>
          </MovieListItem>
        ))}
      </List>

      <Modal>
        <MovieDetails movieId={movieId} deleteMovie={deleteMovie} />
      </Modal>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      filmGenres: PropTypes.string,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func,
  movieId: PropTypes.number,
};

export default MoviesList;
