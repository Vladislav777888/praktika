import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';

import {
  List,
  MovieListItem,
  StyledLink,
  Img,
  Title,
  Info,
} from './MoviesList.styled';

import MovieDetails from 'components/MovieDetails';

const MoviesList = ({ movies, onClick, movieId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const location = useLocation();

  const body = document.querySelector('body');

  if (isModalOpen) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }

  const togleModal = () => {
    setIsModalOpen(prev => !prev);
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

      {isModalOpen && (
        <Modal onClose={togleModal}>
          <MovieDetails movieId={movieId} />
        </Modal>
      )}
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
