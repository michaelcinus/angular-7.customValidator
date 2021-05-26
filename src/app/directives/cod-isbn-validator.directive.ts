import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { validateCodISBN } from '../validators/CustomValidator';

@Directive({
  selector: '[isbn-validator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CodIsbnValidatorDirective,
    multi: true
  }]
})
export class CodIsbnValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return validateCodISBN(control);
  }
}
