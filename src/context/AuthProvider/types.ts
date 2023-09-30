export interface IUser {
  username?: string;
  password?: string;
  email?: string;
  token?: string;
  name?: string;
}

export interface IAuthProps extends IUser {
  user: IUser | null;
  LoginToken: (email: string, password: string) => Promise<boolean>;
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signed: boolean;
}

export interface IAuthProviderProps {
  children: JSX.Element;
}
