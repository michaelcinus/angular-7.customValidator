import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { validateCodISAN } from '../validators/CustomValidator';

@Directive({
  selector: '[isan-validator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CodIsanValidatorDirective,
    multi: true
  }]
})
export class CodIsanValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return validateCodISAN(control);
  }
}
