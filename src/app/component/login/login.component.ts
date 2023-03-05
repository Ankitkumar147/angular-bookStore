import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/service/registration.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token = null;
  public form = {
    email: null,
    password: null
  };
  
  

  constructor(private loginService: RegistrationService){
  }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.loginUser(this.form).subscribe(data=>{
      console.log(data);
      Swal.fire(
        'Login Successfull..',
        'You can Order now..',
        'success'
      );
    }, (error)=>{
      console.log(error);
      Swal.fire(
        'Email Id or Password is wrong',
        'error is '+error,
        'error'
      );
    }
    )
  }


}
