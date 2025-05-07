import { RequestHandler } from "express";

import userService from "../services/userService";

const registerUser: RequestHandler = async (req, res, next) => {
  try {
    const response = await userService.createUser(req.body);
    res.status(response.status).json(response.message);
  } catch (err) {
    next(err);
  }
};

export default { registerUser };
