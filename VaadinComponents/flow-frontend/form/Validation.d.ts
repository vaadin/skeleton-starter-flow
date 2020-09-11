import { Binder } from "./Binder";
import { AbstractModel } from "./Models";
export interface ValueError<T> {
    property: string | AbstractModel<any>;
    message: string;
    value: T;
    validator: Validator<T>;
}
export interface ValidationResult {
    property: string | AbstractModel<any>;
    message?: string;
}
export declare class ValidationError extends Error {
    errors: ReadonlyArray<ValueError<any>>;
    constructor(errors: ReadonlyArray<ValueError<any>>);
}
export declare type ValidationCallback<T> = (value: T, binder: Binder<any, AbstractModel<T>>) => boolean | ValidationResult | ReadonlyArray<ValidationResult> | Promise<boolean | ValidationResult | ReadonlyArray<ValidationResult>>;
export interface Validator<T> {
    validate: ValidationCallback<T>;
    message: string;
    impliesRequired?: boolean;
}
export declare class ServerValidator implements Validator<any> {
    message: string;
    constructor(message: string);
    validate: () => boolean;
}
export declare function runValidator<T>(model: AbstractModel<T>, validator: Validator<T>): Promise<ReadonlyArray<ValueError<T>>>;
