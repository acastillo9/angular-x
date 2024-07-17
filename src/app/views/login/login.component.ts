import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = ''
  password: string = ''
  errorMessage: string = ''

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log(this.username, this.password)

    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/timeline')
      },
      error: (error) => {
        console.log(error)
        this.errorMessage = (error as any).message
      }
    })
  }
}
