import { useState } from 'react';
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

const MoviesList = ({ movies, onClick, movieId }) => {
  const [modalActive, setModalActive] = useState(false);

  if (modalActive) {
    bodyRef.style.overflow = 'hidden';
  } else {
    bodyRef.style.overflow = 'auto';
  }

  const togleModal = () => {
    setModalActive(prev => !prev);
  };

  return (
    <>
      <List>
        {movies.map(({ poster_path, title, release_date, filmGenres, id }) => (
          <MovieListItem key={id} onClick={() => onClick(id)}>
            <StyledLink
              // to={`/${id}`}
              onClick={togleModal}

              // state={{ from: location }}
            >
              <Img src={poster_path} alt={title} loading="lazy" />
              <Title>{title}</Title>
              <Info>{filmGenres}</Info>
              <Info> | </Info>
              <Info>{release_date.split('-')[0]}</Info>
            </StyledLink>
          </MovieListItem>
        ))}
      </List>

      <Modal active={modalActive} onClose={togleModal}>
        {modalActive && <MovieDetails movieId={movieId} />}
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
      filmGenres: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func,
  movieId: PropTypes.number,
};

export default MoviesList;
