import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redirecione para a página de tarefas após o login bem-sucedido.
    } else {
      // Exiba uma mensagem de erro de login.
    }
  }
}
