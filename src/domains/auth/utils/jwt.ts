import jwt from "jsonwebtoken";

export const createJwtToken = (payload: any, expiresIn: string) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY!, {
    expiresIn,
  });
};
