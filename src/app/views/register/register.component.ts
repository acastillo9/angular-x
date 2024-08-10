import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { passwordConfirmValidator } from '../../shared/password-confirm.directive';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { Router, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandXTwitter } from '@ng-icons/font-awesome/brands';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, NgIconComponent],
  providers: [provideIcons({ faBrandXTwitter })],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      username: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateOfBirth: new FormControl(''),
      gender: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
      terms: new FormControl(false),
    },
    { validators: passwordConfirmValidator }
  );

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  register() {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
    console.log(this.registerForm.get('name')?.value);
    if (this.registerForm.valid) {
      // store the form data
      this.usersService
        .addUser(this.registerForm.value as User)
        .subscribe(data => {
          console.log('saved', data);
          this.router.navigate(['/login']);
        });
    }
  }
}
