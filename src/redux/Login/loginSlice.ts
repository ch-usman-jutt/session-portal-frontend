import { endPoints } from "@/endpoints";

import { baseApi } from "../baseApi";
import { LoginResponse, LoginParams } from "@/models/Auth";

export const proposalsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    proposals: builder.mutation<LoginResponse, LoginParams>({
      query: ({ auth_token }) => ({
        url: endPoints.Login.login,
        method: "POST",
        body: { auth_token },
      }),
    }),
  }),
});

export const { useProposalsMutation } = proposalsApi;
