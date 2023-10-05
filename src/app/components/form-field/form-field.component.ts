import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ERROR_MESSAGES } from 'src/app/constants/error-messages.config';
import { MyInputDirective } from 'src/app/directives/input.directive';

@Component({
  selector: 'my-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @ContentChild(MyInputDirective, { static: true })
  myDirective!: MyInputDirective;

  @Input() isValid: boolean = false;

  get errorMessage(): { key: string; options: any } | null {
    const errors = Object.entries(
      this.myDirective?.ngControl?.control?.errors || {}
    );

    if (!errors.length) {
      return null;
    }

    const [key, value] = errors[0];
    return {
      key: ERROR_MESSAGES[key],
      options: value,
    };
  }

  ngOnInit() {
    if (!this.myDirective) {
      throw new Error('MyInputDirective is required!');
    }
  }
}