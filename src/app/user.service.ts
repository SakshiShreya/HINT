import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  firstname: string = "Dummy";
  lastname: string = "User";
  age: number = 50;
  image: string = "../../assets/user.png";
  address: string = "some, address, of, user";
  constructor() {}
}
