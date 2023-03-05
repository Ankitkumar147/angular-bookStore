import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from 'src/app/service/registration.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public UserRegistration = FormGroup;
  public form = {
    userName : null,
    email : null,
    password : null,
  };

  constructor( private registration: RegistrationService,
               private snack: MatSnackBar){}


  // public user={
  //     userName:'',
  //     email:'',
  //     password:''
  //   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    this.registration.addUser(this.form).subscribe((data:any)=>{
      console.log(data);
      // this.snack.open('You are registered', 'ok',{
      //   duration:3000,verticalPosition: 'top'
      // } ); 
      Swal.fire(
        'Successfully Registered..',
        'You can login now..',
        'success'
      );
    }, (error)=> {
      console.log(error)
      this.snack.open('Something went wrong', 'ok',{
        duration:3000
      } );
    });
  }

}
