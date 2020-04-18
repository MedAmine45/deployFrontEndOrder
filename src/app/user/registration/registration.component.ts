import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public userService:UserService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.register().subscribe(
      (res: any) => {
        if (res.Succeeded) {
          this.userService.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.Errors.forEach(element => {
            switch (element.Code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;

              default:
              this.toastr.error(element.Description,'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
