import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
    language: "ko_KR",
    region: "KR",
  },
});

export const movieApi = {
  nowPlaying: (page: number) =>
    api.get("movie/now_playing", {
      params: {
        page,
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
        region: "KR",
      },
    }),
  upcoming: (page: number) =>
    api.get("movie/upcoming", {
      params: {
        page,
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
        region: "KR",
      },
    }),
  popular: (page: number) =>
    api.get("movie/popular", {
      params: {
        page,
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
        region: "KR",
      },
    }),
  topRated: (page: number) =>
    api.get("movie/top_rated", {
      params: {
        page,
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
        region: "KR",
      },
    }),
  detail: (id: number) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "image,videos",
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
        region: "KR",
      },
    }),
  credit: (id: number) =>
    api.get(`movie/${id}/credits`, {
      params: {
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
        region: "KR",
      },
    }),
  search: (query: string, page: number) =>
    api.get("search/movie", {
      params: {
        query,
        include_adult: true,
        region: "KR",
        page,
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
      },
    }),
  person: (id: number) =>
    api.get(`person/${id}`, {
      params: {
        append_to_response: "image,videos",
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
        region: "KR",
      },
    }),
  recommendation: (id: number, page: number) =>
    api.get(`movie/${id}/recommendations`, {
      params: {
        page,
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
        region: "KR",
      },
    }),
  similar: (id: number, page: number) =>
    api.get(`movie/${id}/similar`, {
      params: {
        page,
        api_key: "f24c12bd4d0f5231b12b8f42d9de0180",
        language: "ko_KR",
        region: "KR",
      },
    }),
  filmography: (id: number) => api.get(`person/${id}/movie_credits`),
};
