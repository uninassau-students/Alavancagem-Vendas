export interface IUser {
  username?: string;
  password?: string;
  email?: string;
  token?: string;
}

export interface IAuthProps extends IUser {
  user: IUser | null;
  LoginToken: (email: string, password: string) => Promise<boolean>;
}

export interface IAuthProviderProps {
  children: JSX.Element;
}
