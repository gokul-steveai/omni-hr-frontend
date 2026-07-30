import { apiClient } from "@/lib/api-client";
import { LoginPayload, TokenResponseData } from "@/features/auth/types/auth-types";
import { UserProfile } from "@/types/user";

export interface StandardResponse<T> {
  success: boolean;
  data: T;
  error: { code: string; message: string } | null;
}

export type StandardApiResponse<T> = StandardResponse<T>;

export const authApi = {
  login: async (payload: LoginPayload) => {
    const res = await apiClient.post<StandardResponse<TokenResponseData>>("/auth/login", payload);
    return res.data;
  },

  getMe: async (token: string) => {
    const res = await apiClient.get<StandardResponse<UserProfile>>("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },

  logout: async (refreshToken: string) => {
    const res = await apiClient.post<StandardResponse<{ message: string }>>("/auth/logout", { refresh_token: refreshToken });
    return res.data;
  },
};
