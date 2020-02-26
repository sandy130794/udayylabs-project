import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textbox1;
  textbox2;
  userName: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    const userObj = JSON.parse(localStorage.getItem('user'));
    this.userName = userObj.name;
  }

  onKeydown1(event) {
    if (event.key === 'Enter') {
      let userinput = event.target.value;
      userinput = userinput.trim();
      const res = this.checkAndValidateUrl(userinput);
      if (res == null) {
        this.textbox1 = 'Please Enter an valid URL';
      } else {
        this.textbox1 = res[0];
      }
    }
  }

  onKeydown2(event) {
    if (event.key === 'Enter') {
      const userinput = event.target.value;
      const url = this.checkAndValidateUrl(userinput);
      if (url == null) {
        this.textbox2 = 'Please Enter an valid URL';
      } else {
        this.textbox2 = url[0];
      }
    }
  }

  checkAndValidateUrl(url) {
    const res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res && res[0].indexOf('http') === -1) {
      res[0] = `http://${res[0]}`;
    }
    return res;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }



}
