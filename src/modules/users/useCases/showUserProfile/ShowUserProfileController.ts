/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const user = this.showUserProfileUseCase.execute(request.params);

    return response.status(201).send(user);
  }
}

export { ShowUserProfileController };
