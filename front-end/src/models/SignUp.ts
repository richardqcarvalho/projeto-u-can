type SignUpDataProps = {
  name: string;
  birthDate: string;
};

export type SignUpProps = (data: SignUpDataProps) => void;
