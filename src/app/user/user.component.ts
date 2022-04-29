import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/Models/login';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userId:any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.login();

  }
  login() {
    const loginModel = new LoginModel('admin', 'admin');
    this.userService
      .login(loginModel)
      .subscribe((res: any) => {
        console.log(res);
        if(res=='')
        {
          alert("Login Failed");
        }
        else
        {
          alert("Login Sucessful");
          this.userId=res[0].userId;
          console.log(this.userId);
          this.getUserById(this.userId);
        }
      });
  }
  getUserById(input:any)
  {
    const obj={
      "userId": input
    }
    this.userService.getUserbyId(obj).subscribe((res:any)=>{
      console.log(res);
    });
  }
}
