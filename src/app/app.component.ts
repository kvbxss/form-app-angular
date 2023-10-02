import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isFormValid: boolean = false;
  name = '';
  email = '';
  message = '';


  onValidityChange() {
    const nameIsValid = !!this.name;
    const emailIsValid = this.isValidEmail(this.email);
    const messageIsValid = !!this.message;

    this.isFormValid = nameIsValid && emailIsValid && messageIsValid;
  }
  
  isValidEmail(email: string): boolean {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
  }
}
