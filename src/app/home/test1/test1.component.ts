import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface PeriodicElement {
  email: string;
  position: number;
  password: string;
  textarea: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  displayedColumns: string[] = ['position', 'email', 'password', 'textarea'];
  dataSource = ELEMENT_DATA;

  constructor() { }
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    textarea: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,
                   Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%^&*])[\w!@#=$%^&*]{8,}$/)]),
  });
  loginEdit = new FormGroup({
    emailEdit: new FormControl('', [Validators.required, Validators.email]),
    textareaEdit: new FormControl('', [Validators.required]),
    passwordEdit: new FormControl('', [Validators.required, 
                    Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%^&*])[\w!@#=$%^&*]{8,}$/)]),
  });
  hide = true;
  users = [];
  x: number;

  onSubmit() {
    this.users.push(this.login.value);
  }
  delete(i) {
    this.users.splice(i, 1);
  }
  store(i) {
    console.log(this.users[i].email);
    this.loginEdit.controls['emailEdit'].setValue(this.users[i].email);
    this.loginEdit.controls['passwordEdit'].setValue(this.users[i].password);
    this.loginEdit.controls['textareaEdit'].setValue(this.users[i].textarea);
    this.x = i;
  }
  edit() {
    console.log(this.loginEdit.value.emailEdit);

    const obj = {
      email: this.loginEdit.value.emailEdit,
      password: this.loginEdit.value.passwordEdit,
      textarea: this.loginEdit.value.textareaEdit
    };
    this.users[this.x] = obj;  // .splice(this.x, 1, obj);

  }
  /*  passwordValidation(password) {
      const passformat = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%^&*])[\w!@#=$%^&*]{8,}$/;
      if (password.match(passformat)) {return true; }
      return false;
   }
   getErrorPassword() {
     if (this.passwordValidation(this.password)) {
       return 'Valid Password';
      } else {
       return 'Not a Valid Password';
      }
   }*/
  ngOnInit() {
  }

}
