import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  login:FormGroup;
  hide = true;
 
  constructor( private userService: UsersService) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      textarea: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,
                     Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%^&*])[\w!@#=$%^&*]{8,}$/)]),
    });
  }
  onSubmit() {
    this.userService.addUser(this.login.value);
  }
}
