export type UserProps = {
  code?: string;
  name: string;
  birthDate: string;
  photo?: string;
};

export type CreateUserProps = (data: UserProps) => void;
