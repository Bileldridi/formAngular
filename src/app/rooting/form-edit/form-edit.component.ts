import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    textarea: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,
                   Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%^&*])[\w!@#=$%^&*]{8,}$/)]),
  });
  users: any[];
  x:number;
  constructor(private userService: UsersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.userService.getUser();
    this.route.paramMap.subscribe(param =>{
      let i = +param.get('i');
      this.login.controls['email'].setValue(this.users[i].email);
      this.login.controls['password'].setValue(this.users[i].password);
      this.login.controls['textarea'].setValue(this.users[i].textarea);
      this.x = i;
    });
      

  }
  
  
  edit() {
    const obj = {
      email: this.login.value.email,
      password: this.login.value.password,
      textarea: this.login.value.textarea
    };
    this.users[this.x] = obj;

  }
}
