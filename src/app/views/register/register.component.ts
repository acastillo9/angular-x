import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordConfirmValidator } from '../../shared/password-confirm.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl(''),
    terms: new FormControl(false)
  }, { validators: passwordConfirmValidator })

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  register() {
    console.log(this.registerForm.valid)
    console.log(this.registerForm.value)
    console.log(this.registerForm.get('name')?.value)
    if (this.registerForm.valid) {
      // store the form data
      console.log('SAVED')
    }
  }
}
