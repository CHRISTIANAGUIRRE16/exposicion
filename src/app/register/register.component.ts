import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private userService: UserService) {}

  register() {
    this.userService.register(this.user).subscribe(() => {
      console.log('Usuario registrado exitosamente');
    });
  }
}
