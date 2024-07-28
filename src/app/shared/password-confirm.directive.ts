import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** An actor's name can't match the actor's role */
export const passwordConfirmValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirm = control.get('passwordConfirm');
  return password?.value !== passwordConfirm?.value
    ? { passwordConfirm: true }
    : null;
};
