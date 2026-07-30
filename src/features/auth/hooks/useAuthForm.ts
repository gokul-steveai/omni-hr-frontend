import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/use-auth-store";
import { authApi } from "@/features/auth/api/auth-api";
import { UserRole } from "@/types/user";

export function useAuthForm() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState<UserRole>("employee");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      if (authMode === "login") {
        const loginApiResponse = await authApi.login({ email, password });
        const { access_token, refresh_token } = loginApiResponse.data;
        const userProfileResponse = await authApi.getMe(access_token);
        setAuth(userProfileResponse.data, access_token, refresh_token);
        router.push("/dashboard");
      } else {
        const registerApiResponse = await authApi.register({
          email,
          password,
          first_name: firstName,
          last_name: lastName,
          role,
        });
        const { access_token, refresh_token } = registerApiResponse.data;
        const userProfileResponse = await authApi.getMe(access_token);
        setAuth(userProfileResponse.data, access_token, refresh_token);
        setSuccessMsg("Account created successfully!");
        router.push("/dashboard");
      }
    } catch (authenticationError: any) {
      console.error(authenticationError);
      setErrorMsg(
        authenticationError.response?.data?.error?.message ||
          "Invalid credentials or backend server unreachable."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    authMode,
    setAuthMode,
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    role,
    setRole,
    isLoading,
    errorMsg,
    successMsg,
    handleSubmit,
  };
}
