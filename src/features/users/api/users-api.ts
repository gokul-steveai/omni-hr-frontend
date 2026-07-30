import { apiClient } from "@/lib/api-client";
import { ProfileUpdatePayload, UserListParams } from "@/features/users/types/user-types";
import { UserProfile, UserProfileData } from "@/types/user";
import { StandardApiResponse } from "@/features/auth/api/auth-api";

export const usersApi = {
  getProfile: async (): Promise<StandardApiResponse<UserProfileData>> => {
    const res = await apiClient.get("/users/me/profile");
    return res.data;
  },

  updateProfile: async (payload: ProfileUpdatePayload): Promise<StandardApiResponse<UserProfileData>> => {
    const res = await apiClient.put("/users/me/profile", payload);
    return res.data;
  },

  listUsers: async (params?: UserListParams): Promise<StandardApiResponse<UserProfile[]>> => {
    const res = await apiClient.get("/users", { params });
    return res.data;
  },
};
