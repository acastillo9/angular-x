import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandXTwitter } from '@ng-icons/font-awesome/brands';
import { faSolidHouse } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  providers: [provideIcons({ faBrandXTwitter, faSolidHouse })],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  loggedUser = this.authService.loggedUser;

  constructor(private authService: AuthService) {}
}
