export interface IUser {
  username?: string;
  password?: string;
  email?: string;
  token?: string;
}

export interface IAuthProps extends IUser {
  LoginToken: (email: string, password: string) => Promise<void>;
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signed: boolean;
}

export interface IAuthProviderProps {
  children: JSX.Element;
}
