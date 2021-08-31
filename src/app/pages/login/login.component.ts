import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoginReqDto } from 'src/app/models/login-dto/login-req-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginReqDto = new LoginReqDto();

  public loading = false;

  constructor(private userService: UserService,  private authService: AuthService, private router: Router, private title: Title){}

  ngOnInit(): void {
    this.title.setTitle('Login');
  }

  login(): void{
    this.loading = true;
    this.userService.login(this.loginReqDto).subscribe(res => {
      this.authService.saveProfile(res.data!)
      console.log(res);
      this.loading = false;
      this.router.navigate(['/home'])
    });
  }

}
