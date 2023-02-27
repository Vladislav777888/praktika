import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getMovieDetails } from 'services';
import { STATUS } from 'constants';
import { BASE_POSTER_URL, FAKE_POSTER } from 'constants/baseUrl';

import { NotFound } from 'components/NotFound';
import { Loader } from 'components/Loader';
import InnerMovieDetails from 'components/InnerMovieDetails';
import { useModal } from 'context/ModalContext';

const MovieDetails = ({ movieId, deleteMovie }) => {
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);
  const { modalActive } = useModal();

  useEffect(() => {
    if (!movieId || !modalActive) {
      return;
    }

    const fetchMovieDetails = async () => {
      setStatus(STATUS.loading);

      try {
        const data = await getMovieDetails(movieId);

        if (data.length === 0) {
          throw new Error('We have nothing for this search');
        }

        if (!data.poster_path) {
          data.poster_path = FAKE_POSTER;
        } else {
          data.poster_path = BASE_POSTER_URL + data.poster_path;
        }

        if (!data.title) {
          data.title = 'no name';
        }

        if (!data.vote_average) {
          data.vote_average = 'N/A';
        } else {
          data.vote_average = String(data.vote_average).slice(0, 3);
        }

        if (!data.vote_count) {
          data.vote_count = 'N/A';
        }

        if (!data.popularity) {
          data.popularity = 'N/A';
        }

        if (data.genres.length === 0) {
          data.genres = 'genres unknown';
        } else {
          data.genres = data.genres.map(genre => genre.name).join(', ');
        }

        if (!data.overview) {
          data.overview = 'No description';
        }

        if (!data.release_date) {
          data.release_date = '';
        }

        setMovie({
          poster_path: data.poster_path,
          title: data.title,
          vote_average: data.vote_average,
          vote_count: String(data.vote_count),
          overview: data.overview,
          genres: data.genres,
          popularity: data.popularity,
          release_date: data.release_date.split('-')[0],
          id: movieId,
        });
        setStatus(STATUS.success);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };

    fetchMovieDetails();
  }, [modalActive, movieId]);

  return (
    <>
      {status === STATUS.success && (
        <InnerMovieDetails
          movie={movie}
          movieId={movieId}
          deleteMovie={deleteMovie}
        />
      )}
      {status === STATUS.error && <NotFound />}
      {(status === STATUS.loading || status === STATUS.idle) && <Loader />}
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.number,
};

export default MovieDetails;
