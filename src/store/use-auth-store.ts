import { create } from "zustand";
import { UserProfile } from "@/types/user";

interface AuthState {
  user: UserProfile | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  setAuth: (user: UserProfile, token: string, refreshToken: string) => void;
  logout: () => void;
  updateUser: (user: Partial<UserProfile>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: typeof window !== "undefined" ? localStorage.getItem("omni_access_token") : null,
  isAuthenticated: false,

  setAuth: (user, token, refreshToken) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("omni_access_token", token);
      localStorage.setItem("omni_refresh_token", refreshToken);
    }
    set({ user, accessToken: token, isAuthenticated: true });
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("omni_access_token");
      localStorage.removeItem("omni_refresh_token");
    }
    set({ user: null, accessToken: null, isAuthenticated: false });
  },

  updateUser: (updatedFields) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updatedFields } : null,
    })),
}));
