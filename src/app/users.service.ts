import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any[] = [];
  x: number;
  loginEdit: FormGroup;
  constructor() { }
  getUser() {
    return this.users;
  }
  addUser(user) {
    this.users.push(user);
  }
}
