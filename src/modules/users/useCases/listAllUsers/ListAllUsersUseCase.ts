/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdmin = this.usersRepository.findById(user_id);
    console.log(this.usersRepository);
    if(userAdmin.admin){
      const users = this.usersRepository.list();
      return users;
    }
    return [];
  }
}

export { ListAllUsersUseCase };
