export type LoginDataProps = {
  email: string;
  password: string;
};

export type LoginProps = (data: LoginDataProps) => void;
