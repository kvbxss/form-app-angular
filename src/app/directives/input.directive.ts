import { Directive, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[myInput]',
})
export class MyInputDirective {
  constructor(@Optional() @Self() public ngControl: NgControl) {}
}