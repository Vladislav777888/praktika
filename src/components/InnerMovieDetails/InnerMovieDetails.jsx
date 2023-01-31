import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { toast } from 'react-toastify';

import {
  Img,
  ModalInfo,
  ModalTitle,
  ModalData,
  ModalDataInfo,
  ModalDataInfoGrey,
  ModalDataNumber,
  ModalDataRatio,
  ModalDescription,
  ModalDescriptionTitle,
  ModalButtonPlay,
  ModalButtonsWraper,
  ModalDescriptionAbout,
  ModalButton,
} from './InnerMovieDetails.styled';

import './InnerMovieDetails.scss';

import playBtn from '../../images/play-btn/play-btn.png';
import { getTrailerById } from 'services';
import { LOCALSTORAGE_KEY_WATCHED } from 'constants/localStorageKeys';
import { LOCALSTORAGE_KEY_QUEUE } from 'constants/localStorageKeys';

// Для библиотеки basicLightbox чтобы показать трейлер
let instance;

// Массивы для сохранения фильмов в localStorage
let watchedFilms = [];
let queueFilms = [];

const InnerMovieDetails = ({ movie, movieId }) => {
  const {
    title,
    vote_average,
    overview,
    poster_path,
    vote_count,
    genres,
    popularity,
  } = movie;

  const btnWatchedRef = useRef();
  const btnQueueRef = useRef();

  // useEffect для кнопки watched чтобы придать ей атрибут disabled
  useEffect(() => {
    const watchedFilmsFromLS = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEY_WATCHED)
    );

    if (watchedFilmsFromLS) {
      watchedFilmsFromLS.forEach(film => {
        if (film.movieId === movieId) {
          btnWatchedRef.current.setAttribute('disabled', true);
        }
      });
    }
  }, [movieId]);

  // useEffect для кнопки queue чтобы придать ей атрибут disabled
  useEffect(() => {
    const queueFilmsFromLS = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEY_QUEUE)
    );

    if (queueFilmsFromLS) {
      queueFilmsFromLS.forEach(film => {
        if (film.movieId === movieId) {
          btnQueueRef.current.setAttribute('disabled', true);
        }
      });
    }
  }, [movieId]);

  // Показ трейлера фильма
  const showTrailer = async () => {
    try {
      const data = await getTrailerById(movieId);

      if (data.length === 0 || data === undefined) {
        toast.warning('Sorry, trailer not found.');
        return;
      }

      let key = '';
      data.forEach(element => {
        if (element.type === 'Trailer') {
          if (element.name.includes('Official')) {
            key = element.key;
            return;
          }
        }
      });

      if (!key) {
        key = data[0].key;
      }

      instance = basicLightbox.create(
        `
              <iframe class="youtube-modal" allow="fullscreen" src="https://www.youtube.com/embed/${key}"></iframe>

            `,
        {
          onShow: () => {
            window.addEventListener('keydown', onPressEscape);
          },
          onClose: () => {
            window.removeEventListener('keydown', onPressEscape);
          },
        }
      );

      instance.show();
    } catch (error) {
      console.log(error);
      toast.warning('Sorry, trailer not found.');
    }
  };

  // Закрытие трейлера кнопкой Esc
  const onPressEscape = event => {
    if (event.key === 'Escape') {
      instance.close(() => {});
    }
  };

  // Добавление фильма в LocalStorage
  const addToLocalStorage = evt => {
    const { textContent } = evt.target;

    if (textContent === 'ADD TO WATCHED') {
      watchedFilms.push(movie);

      localStorage.setItem(
        LOCALSTORAGE_KEY_WATCHED,
        JSON.stringify(watchedFilms)
      );
    } else {
      queueFilms.push(movie);
      localStorage.setItem(LOCALSTORAGE_KEY_QUEUE, JSON.stringify(queueFilms));
    }
  };

  return (
    <>
      <Img src={poster_path} alt={title} />
      <ModalInfo>
        <ModalTitle>{title}</ModalTitle>

        <ModalData>
          <ModalDataInfo>
            <ModalDataInfoGrey>Vote / Votes</ModalDataInfoGrey>
            <ModalDataNumber>
              <ModalDataRatio>{vote_average}</ModalDataRatio>/{vote_count}
            </ModalDataNumber>
          </ModalDataInfo>
          <ModalDataInfo>
            <ModalDataInfoGrey>Popularity</ModalDataInfoGrey>
            <ModalDataNumber>{popularity}</ModalDataNumber>
          </ModalDataInfo>
          <ModalDataInfo>
            <ModalDataInfoGrey>Original Title</ModalDataInfoGrey>
            <span>{title}</span>
          </ModalDataInfo>
          <ModalDataInfo>
            <ModalDataInfoGrey>Genre</ModalDataInfoGrey>
            <span>{genres}</span>
          </ModalDataInfo>
        </ModalData>

        <ModalDescription>
          <ModalDescriptionTitle>
            About
            <ModalButtonPlay type="button" onClick={showTrailer}>
              <img src={playBtn} alt="trailer" />
            </ModalButtonPlay>
          </ModalDescriptionTitle>
          <ModalDescriptionAbout>{overview}</ModalDescriptionAbout>
        </ModalDescription>

        <ModalButtonsWraper>
          <ModalButton
            ref={btnWatchedRef}
            onClick={evt => {
              addToLocalStorage(evt);
              btnWatchedRef.current.setAttribute('disabled', true);
            }}
          >
            ADD TO WATCHED
          </ModalButton>
          <ModalButton
            ref={btnQueueRef}
            onClick={evt => {
              addToLocalStorage(evt);
              btnQueueRef.current.setAttribute('disabled', true);
            }}
          >
            ADD TO QUEUE
          </ModalButton>
        </ModalButtonsWraper>
      </ModalInfo>
    </>
  );
};

InnerMovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    vote_count: PropTypes.string,
    popularity: PropTypes.number,
    genres: PropTypes.string,
  }).isRequired,
  movieId: PropTypes.number.isRequired,
};

export default InnerMovieDetails;
