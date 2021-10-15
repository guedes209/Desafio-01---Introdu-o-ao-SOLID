/* eslint-disable prettier/prettier */
import { v4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin?: boolean;
  create_at: Date;
  update_at: Date;

  constructor() {
    if(!this.id){
      this.id = v4();
    }
    if(!this.admin) {
      this.admin = false;
    }
  }

}

export { User };
