import { apiClient } from "@/lib/api-client";
import { LoginPayload, RegisterPayload, TokenResponseData } from "@/features/auth/types/auth-types";
import { UserProfile } from "@/types/user";

export interface StandardApiResponse<T> {
  success: boolean;
  data: T;
  error?: {
    code: string;
    message: string;
  } | null;
}

export const authApi = {
  login: async (payload: LoginPayload): Promise<StandardApiResponse<TokenResponseData>> => {
    const res = await apiClient.post("/auth/login", payload);
    return res.data;
  },

  register: async (payload: RegisterPayload): Promise<StandardApiResponse<TokenResponseData>> => {
    const res = await apiClient.post("/auth/register", payload);
    return res.data;
  },

  getMe: async (token: string): Promise<StandardApiResponse<UserProfile>> => {
    const res = await apiClient.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },

  logout: async (refreshToken: string): Promise<StandardApiResponse<{ message: string }>> => {
    const res = await apiClient.post("/auth/logout", { refresh_token: refreshToken });
    return res.data;
  },
};
