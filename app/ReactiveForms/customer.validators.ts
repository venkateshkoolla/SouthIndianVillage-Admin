import { AbstractControl } from "@angular/forms";

export class CustomerValidators{

    static ValidatePhoneNumber(control: AbstractControl){
        const regEx = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/; 
        const valid = regEx.test(control.value);
        return valid ? null :  {inValidPhoneNumber: true};
    }

    static ValidateEmail(control: AbstractControl){
        const regEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const valid = regEx.test(control.value)
        return valid? null : {invalidEmail: true}
    }

    static ValidateStatus(control: AbstractControl){
        const valid = control.value == null;
        return valid? null : {invalidSatus : true}    
    }
}