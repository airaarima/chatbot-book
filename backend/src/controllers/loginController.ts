import { RequestHandler } from "express";

import userService from "../services/loginService";

const loginUser: RequestHandler = async (req, res, next) => {
  try {
    const response = await userService.loginUser(req.body);
    res.status(response.status).json(response);
  } catch (err) {
    next(err);
  }
};

export default { loginUser };
