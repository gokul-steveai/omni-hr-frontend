# Frontend API Integration & Client Specifications

The frontend communicates with the backend API (`http://localhost:8000/api/v1`) using a centralized Axios HTTP client.

---

## 1. Centralized Axios Client (`src/lib/api-client.ts`)

- **Base URL**: Configured via `NEXT_PUBLIC_API_URL` environment variable in `.env.local`.
- **Authorization Interceptor**: Automatically attaches Bearer token header (`Authorization: Bearer <access_token>`) from `localStorage`.
- **Response Handling**: Unwraps backend standardized JSON response envelope `StandardResponse[T]`.

---

## 2. Feature API Modules

- **Auth API (`src/features/auth/api/auth-api.ts`)**:
  - `login(payload: LoginPayload)` $\rightarrow$ `POST /auth/login`
  - `register(payload: RegisterPayload)` $\rightarrow$ `POST /auth/register`
  - `getMe(token: string)` $\rightarrow$ `GET /auth/me`
  - `logout(refreshToken: string)` $\rightarrow$ `POST /auth/logout`

- **Users API (`src/features/users/api/users-api.ts`)**:
  - `getProfile()` $\rightarrow$ `GET /users/me/profile`
  - `updateProfile(payload: ProfileUpdatePayload)` $\rightarrow$ `PUT /users/me/profile`
  - `listUsers(params?: UserListParams)` $\rightarrow$ `GET /users`
