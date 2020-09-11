/* tslint:disable:max-classes-per-file */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getBinderNode, } from "./Models";
import { Required } from "./Validators";
export class ValidationError extends Error {
    constructor(errors) {
        super([
            "There are validation errors in the form.",
            ...errors.map(e => `${e.property} - ${e.validator.constructor.name}${e.message ? ': ' + e.message : ''}`)
        ].join('\n - '));
        this.errors = errors;
        this.name = this.constructor.name;
    }
}
export class ServerValidator {
    constructor(message) {
        this.message = message;
        this.validate = () => false;
    }
}
export function runValidator(model, validator) {
    return __awaiter(this, void 0, void 0, function* () {
        const value = getBinderNode(model).value;
        // if model is not required and value empty, do not run any validator
        if (!getBinderNode(model).required && !new Required().validate(value)) {
            return [];
        }
        return (() => __awaiter(this, void 0, void 0, function* () { return validator.validate(value, getBinderNode(model).binder); }))()
            .then(result => {
            if (result === false) {
                return [{ property: getBinderNode(model).name, value, validator, message: validator.message }];
            }
            else if (result === true || Array.isArray(result) && result.length === 0) {
                return [];
            }
            else if (Array.isArray(result)) {
                return result.map(result2 => (Object.assign(Object.assign({ message: validator.message }, result2), { value, validator })));
            }
            else {
                return [Object.assign(Object.assign({ message: validator.message }, result), { value, validator })];
            }
        });
    });
}
//# sourceMappingURL=Validation.js.map