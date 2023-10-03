import { Component } from '@angular/core';

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
    const messageIsValid = this.isMsgLengthValid(this.message);
    this.isMessageLengthValid = messageIsValid;
    
    this.isFormValid = nameIsValid && emailIsValid && messageIsValid;
    
    console.log(this.isMsgLengthValid(this.message))
  }
  
  isValidEmail(email: string): boolean {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
  }

  isMsgLengthValid(message: string): boolean {
    console.log(message)
    return message.length <= 120;
  }



  submitForm() {
    if (this.isFormValid) {
      alert('Form submitted successfully!');
      this.name = '';
      this.email = '';
      this.message = '';
      this.isFormValid = false;
    } else {
      alert('Please fill in all required fields and correct any errors.');
    }
  }
}
