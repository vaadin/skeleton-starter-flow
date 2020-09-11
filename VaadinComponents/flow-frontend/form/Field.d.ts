import { Part } from "lit-html";
import { AbstractModel } from "./Models";
interface Field {
    required: boolean;
    invalid: boolean;
    errorMessage: string;
    value: any;
}
export interface FieldStrategy extends Field {
    element: Element;
}
export declare abstract class AbstractFieldStrategy implements FieldStrategy {
    element: Element & Field;
    abstract required: boolean;
    abstract invalid: boolean;
    constructor(element: Element & Field);
    validate: () => Promise<never[]>;
    get value(): any;
    set value(value: any);
    set errorMessage(_: string);
    setAttribute(key: string, val: any): void;
}
export declare class VaadinFieldStrategy extends AbstractFieldStrategy {
    set required(value: boolean);
    set invalid(value: boolean);
    set errorMessage(value: string);
}
export declare class GenericFieldStrategy extends AbstractFieldStrategy {
    set required(value: boolean);
    set invalid(value: boolean);
}
export declare class CheckedFieldStrategy extends GenericFieldStrategy {
    set value(val: any);
    get value(): any;
}
export declare class SelectedFieldStrategy extends GenericFieldStrategy {
    set value(val: any);
    get value(): any;
}
export declare function getDefaultFieldStrategy(elm: any): FieldStrategy;
/**
 * Binds a form field component into a model.
 *
 * Exmaple usage:
 *
 * ```
 * <vaadin-text-field ...="${field(model.name)}">
 * </vaadin-text-field>
 * ```
 */
export declare const field: <T>(model: AbstractModel<T>, effect?: ((element: Element) => void) | undefined) => (part: Part) => void;
export {};
