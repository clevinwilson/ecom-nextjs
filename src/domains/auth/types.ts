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
  user?: {
    id: string,
    name: string,
    email: string,
    token: string
  }
};

export type User = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
