type AddressProps = {
  cep: number;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
};

export type UserProps = {
  id?: number;
  name: string;
  cpf: string;
  email: string;
  password?: string;
  endereco: AddressProps;
};

export type CreateUserProps = (data: UserProps) => void;
