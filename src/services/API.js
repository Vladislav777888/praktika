import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchGenres = async () => {
  const { data } = await postsApi.get('/genre/movie/list', {
    params: {
      api_key: '46cf2a6d2c28bead868caabe4f80f475',
    },
  });

  return data.genres;
};

export const getTrendingMovies = async () => {
  const { data } = await postsApi.get('/trending/movie/day', {
    params: {
      api_key: '46cf2a6d2c28bead868caabe4f80f475',
    },
  });

  return data;
};

export const getMovieDetails = async movie_id => {
  const { data } = await postsApi.get(`/movie/${movie_id}`, {
    params: {
      api_key: '46cf2a6d2c28bead868caabe4f80f475',
    },
  });

  return data;
};

export const getSearchMovies = async (params = {}) => {
  const { data } = await postsApi.get(`/search/movie`, {
    params: {
      api_key: '46cf2a6d2c28bead868caabe4f80f475',
      ...params,
    },
  });

  return data;
};

export const getTrailerById = async movie_id => {
  const { data } = await postsApi.get(`/movie/${movie_id}/videos`, {
    params: {
      api_key: '46cf2a6d2c28bead868caabe4f80f475',
    },
  });

  return data.results;
};
