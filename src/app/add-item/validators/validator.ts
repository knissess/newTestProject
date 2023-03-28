import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const checkedExpressionValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const regex = new RegExp(/^[А-я]+(?:[^A-z]*)$/); // строка не может начинаться со спец символов и цифр, латиница запрещена
  if (!regex.test(control.value) && control.value) {
    control.markAsTouched();
    return { identityRevealed: true };
  }

  return null;
};
