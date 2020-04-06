import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f24c12bd4d0f5231b12b8f42d9de0180",  // process.env.API_KEY
    language: "ko_KR"
  }
});

export const movieApi = {
  nowPlaying: () => api.get("/movie/now_playing"),
  upcoming: () => api.get("/movie/upcoming"),
  popular: () => api.get("/movie/popular"),
  detail: id =>
    api.get(`/movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  credit: id => api.get(`/movie/${id}/credits`),
  search: term => api.get("/search/movie", {
    params: {
      query: term
    }
  })
};

export const tvApi = {
  topRated: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  airingToday: () => api.get("/tv/airing_today"),
  detail: id =>
    api.get(`/tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term => api.get("/search/tv", {
    params: {
      query: encodeURIComponent(term)
    }
  })
};