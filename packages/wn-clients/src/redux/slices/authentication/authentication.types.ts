export interface IAuthenticationTokens {
  access: string;
  refresh: string;
}

export interface IAuthenticationUser {
  id: string;
  name: string;
  email: string;
  lastName: string;
  image: string;
  role: string;
}

export interface ILoginPayload {
  user: IAuthenticationUser;
  tokens: IAuthenticationTokens;
  isAuthenticated: boolean;
}
