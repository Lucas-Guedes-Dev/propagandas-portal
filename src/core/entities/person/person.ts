export interface PersonParam {
  id?: number;
  is_client?: boolean;
  is_employe?: boolean;
  is_driver?: boolean;
  cpf_cnpj?: string;
}

export interface PersonResponse {
  active: boolean;
  cpf: string;
  email: string;
  id: number;
  is_client: boolean;
  is_driver: boolean;
  is_employee: boolean;
  neighborhood: string;
  nome: string;
  number: string;
  phone: string;
  road: string;
  state: string;
  city: string;
  user_id: number;
}
