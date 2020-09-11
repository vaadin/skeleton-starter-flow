import { Validator } from './Validation';
interface ValidatorAttributes {
    message?: string;
}
interface ValueNumberAttributes extends ValidatorAttributes {
    value: number | string;
}
interface DigitAttributes extends ValidatorAttributes {
    integer: number;
    fraction: number;
}
interface SizeAttributes extends ValidatorAttributes {
    min?: number;
    max?: number;
}
interface PatternAttributes extends ValidatorAttributes {
    regexp: RegExp | string;
}
interface DecimalAttributes extends ValueNumberAttributes {
    inclusive?: boolean;
}
declare abstract class AbstractValidator<T> implements Validator<T> {
    message: string;
    impliesRequired: boolean;
    constructor(attrs?: ValidatorAttributes);
    abstract validate(value: T): boolean | Promise<boolean>;
}
export declare class Required<T> extends AbstractValidator<T> {
    impliesRequired: boolean;
    validate(value: T): boolean;
}
declare abstract class ValueNumberValidator<T> extends AbstractValidator<T> {
    value: number;
    constructor(attrs: ValueNumberAttributes | number | string);
}
export declare class Email extends AbstractValidator<string> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: string) => boolean;
}
export declare class Null extends AbstractValidator<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class NotNull extends Required<any> {
    constructor(attrs?: ValidatorAttributes);
    validate(value: any): boolean;
}
export declare class NotEmpty extends Required<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class NotBlank extends Required<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class AssertTrue extends AbstractValidator<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class AssertFalse extends AbstractValidator<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class Min extends ValueNumberValidator<any> {
    constructor(attrs: ValueNumberAttributes | number | string);
    validate: (value: any) => any;
}
export declare class Max extends ValueNumberValidator<any> {
    constructor(attrs: ValueNumberAttributes | number | string);
    validate: (value: any) => any;
}
export declare class DecimalMin extends ValueNumberValidator<any> {
    inclusive: boolean;
    constructor(attrs: DecimalAttributes | string | number);
    validate: (value: any) => any;
}
export declare class DecimalMax extends ValueNumberValidator<any> {
    inclusive: boolean;
    constructor(attrs: DecimalAttributes | string | number);
    validate: (value: any) => any;
}
export declare class Negative extends AbstractValidator<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class NegativeOrZero extends AbstractValidator<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class Positive extends AbstractValidator<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class PositiveOrZero extends AbstractValidator<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class Size extends AbstractValidator<string> {
    min: number;
    max: number;
    constructor(attrs: SizeAttributes);
    validate: (value: string) => boolean;
}
export declare class Digits extends AbstractValidator<string> {
    integer: number;
    fraction: number;
    constructor(attrs: DigitAttributes);
    validate: (value: any) => boolean;
}
export declare class Past extends AbstractValidator<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class Future extends AbstractValidator<any> {
    constructor(attrs?: ValidatorAttributes);
    validate: (value: any) => boolean;
}
export declare class Pattern extends AbstractValidator<string> {
    regexp: RegExp;
    constructor(attrs: PatternAttributes | string | RegExp);
    validate: (value: any) => boolean;
}
export {};
