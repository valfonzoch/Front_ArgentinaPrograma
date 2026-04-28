export interface Credenciales {
  email: string;
  password: string;
}

export interface LoginResponse {
  token?: string;
  jwt?: string;
  accessToken?: string;
  ok?: boolean;
  success?: boolean;
  authenticated?: boolean;
}
