import { AbstractControl } from "@angular/forms";


export function validateCodISBN(control: AbstractControl) {
    let codISBN = control.value;
    const COD_ISBN_REGEXP = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;

    console.log(`Codice ISBN digitato: ${codISBN}`);
    const error = !COD_ISBN_REGEXP.test(codISBN);
    return error ? { 'codISBNFormatError': { valid: false, value: codISBN } } : null;
}

export function validateCodISAN(control: AbstractControl) {
    let codISAN = control.value;
    const COD_ISAN_REGEXP = /^[0]{4}-[0-9]{4}-[A-Z,0-9]{4}-[0]{4}-[A-Z]-[0-9]{4}-[0-9]{4}-[A-Z,0-9]$/

    console.log(`Codice ISAN digitato: ${codISAN}`);
    const error = !COD_ISAN_REGEXP.test(codISAN);
    return error ? { 'codISBNFormatError': { valid: false, value: codISAN } } : null;
}