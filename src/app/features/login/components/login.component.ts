import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentChecked {

  constructor(
    private router: Router
  ) { }
  ngAfterContentChecked(): void {

  }

  ngOnInit(): void {

  }

  signIn(): void {

    this.router.navigate(['/app/province'])


  }

}
