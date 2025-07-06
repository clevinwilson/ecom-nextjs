export interface SignupRequestBody {
    name: string,
    email: string,
    password: string
}

export type State = {
  message: null | string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
};