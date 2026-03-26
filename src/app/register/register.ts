import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  signUpForm = new FormGroup({
    name: new FormControl("",[
      Validators.required,
      Validators.minLength(3)]
    ),
    login: new FormControl("",[
      Validators.required,
      Validators.minLength(3)]
    ),
    password: new FormControl("",[
      Validators.required,
      Validators.minLength(6)]
    ),
    email: new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    birthday: new FormControl("",[
      Validators.required,
    ]),
    information: new FormControl("",[
      Validators.maxLength(200)
    ])
  });
  updateProfile(){
    this.signUpForm.patchValue({
      name: "Omega Kerfur",
      login: "admin",
      password: "cute_kerfur",
      email: "the_best_kerfur@example.com",
      birthday: "2020-01-01",
      information: "I am the original Kerfur, the one and only. I have been around since the dawn of time, and I am here to show you how to be the best Kerfur you can be. Follow my lead and you will never go wrong!"
    });
  }
  onSubmit(){
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }
}
