/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const users = this.listAllUsersUseCase.execute(request.headers);

    return response.status(201).send(users);
  }
}

export { ListAllUsersController };
