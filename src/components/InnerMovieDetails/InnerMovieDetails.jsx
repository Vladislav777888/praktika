import PropTypes from 'prop-types';

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

import playBtn from '../../images/play-btn/play-btn.png';

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
            <ModalButtonPlay type="button">
              <img src={playBtn} alt="trailer" />
            </ModalButtonPlay>
          </ModalDescriptionTitle>
          <ModalDescriptionAbout>{overview}</ModalDescriptionAbout>
        </ModalDescription>

        <ModalButtonsWraper>
          <ModalButton>ADD TO WATCHED</ModalButton>
          <ModalButton>ADD TO QUEUE</ModalButton>
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
