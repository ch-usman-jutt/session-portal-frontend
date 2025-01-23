import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const REDUCER_PATH = "api";
export const SPOTIFY_REDUCER_PATH = "spotify_api";

export const tagTypes = [] as const; // TODO: will add tags here

export const baseApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }), //TODO: will use this endpoint from env file when multiple env exists
  tagTypes,
  endpoints: () => ({}),
});
