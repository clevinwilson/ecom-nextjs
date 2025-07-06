export interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export type State = {
  message: null | string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
};

export type LoginActionState = {
  success: boolean;
  message: null | string;
  errors?: {
    email?: string[];
    password?: string[];
  };
};
