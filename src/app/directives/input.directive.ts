import { Directive, EventEmitter, HostListener, Optional, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[myInput]',
})
export class MyInputDirective {
  @Output() validityChange = new EventEmitter<boolean>();

  constructor(@Optional() @Self() public ngControl: NgControl) {}

  @HostListener('input') onInput() {
    const isValid = this.ngControl?.valid ?? false;
    this.validityChange.emit(isValid);
  }
}