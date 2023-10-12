import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { concatMap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent {
  isFormValid: boolean = false;
  isMessageLengthValid: boolean = true;
  name = '';
  email = '';
  message = '';


  onValidityChange() {
    const nameIsValid = !!this.name;
    const emailIsValid = this.isValidEmail(this.email);
    const messageIsValid = !!this.isMsgLengthValid(this.message);
    this.isMessageLengthValid = messageIsValid;
    
    this.isFormValid = nameIsValid && emailIsValid && messageIsValid;
    
    console.log(this.isMsgLengthValid(this.message))
  }
  
  isValidEmail(email: string): boolean {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
  }

  isMsgLengthValid(message: string): boolean {
    console.log(message)
    return message.length < 120;
  }

  constructor(private httpService: HttpService) { }


  submitForm() {
    const url = 'https://62f4bd57ac59075124c2c928.mockapi.io/';
    
    if (this.isFormValid) {
      alert('Form submitted successfully!');
      this.name = '';
      this.email = '';
      this.message = '';
      this.isFormValid = false;

      const firstUrl = url + 'url';
      const secondUrl = url + 'next_url';

      this.httpService.get(firstUrl)
      .pipe(
        concatMap(data1 => this.httpService.get(secondUrl))
      )
      .subscribe(data2 => {
        const neededMessage = data2.message;
        alert(neededMessage);
      });
    } else {
      alert('Please fill in all required fields and correct any errors.');
    }
  }
}
