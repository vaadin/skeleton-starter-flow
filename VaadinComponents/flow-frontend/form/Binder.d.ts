import { BinderNode } from "./BinderNode";
import { AbstractModel, ModelConstructor } from "./Models";
import { Validator, ValueError } from "./Validation";
import { FieldStrategy } from "./Field";
declare const _submitting: unique symbol;
declare const _defaultValue: unique symbol;
declare const _value: unique symbol;
declare const _emptyValue: unique symbol;
declare const _onChange: unique symbol;
declare const _onSubmit: unique symbol;
declare const _validations: unique symbol;
declare const _validating: unique symbol;
declare const _validationRequestSymbol: unique symbol;
/**
 * A Binder controls all aspects of a single form.
 * Typically it is used to get and set the form value,
 * access the form model, validate, reset, and submit the form.
 *
 * @param <T> is the type of the value that binds to a form
 * @param <M> is the type of the model that describes the structure of the value
 */
export declare class Binder<T, M extends AbstractModel<T>> extends BinderNode<T, M> {
    context: Element;
    private [_defaultValue];
    private [_value];
    private [_emptyValue];
    private [_submitting];
    private [_validating];
    private [_validationRequestSymbol];
    private [_onChange];
    private [_onSubmit];
    private [_validations];
    /**
     *
     * @param context The form view component instance to update.
     * @param Model The constructor (the class reference) of the form model. The Binder instantiates the top-level model
     * @param config The options object, which can be used to config the onChange and onSubmit callbacks.
     *
     * ```
     * binder = new Binder(orderView, OrderModel);
     * or
     * binder = new Binder(orderView, OrderModel, {onSubmit: async (order) => {endpoint.save(order)}});
     * ```
     */
    constructor(context: Element, Model: ModelConstructor<T, M>, config?: BinderConfiguration<T>);
    /**
     * The initial value of the form, before any fields are edited by the user.
     */
    get defaultValue(): T;
    set defaultValue(newValue: T);
    /**
     * The current value of the form.
     */
    get value(): T;
    set value(newValue: T);
    /**
     * Read the given value into the form and clear validation errors
     *
     * @param value Sets the argument as the new default
     * value before resetting, otherwise the previous default is used.
     */
    read(value: T): void;
    /**
     * Reset the form to the previous value
     */
    reset(): void;
    /**
     * Sets the form to empty value, as defined in the Model.
     */
    clear(): void;
    /**
     * Submit the current form value to a predefined
     * onSubmit callback.
     *
     * It's a no-op if the onSubmit callback is undefined.
     */
    submit(): Promise<T | void>;
    /**
     * Submit the current form value to callback
     *
     * @param endpointMethod the callback function
     */
    submitTo(endpointMethod: (value: T) => Promise<T | void>): Promise<T | void>;
    requestValidation<NT, NM extends AbstractModel<NT>>(model: NM, validator: Validator<NT>): Promise<ReadonlyArray<ValueError<NT>>>;
    /**
     * Determines and returns the field directive strategy for the bound element.
     * Override to customise the binding strategy for a component.
     * The Binder extends BinderNode, see the inherited properties and methods below.
     *
     * @param elm the bound element
     */
    getFieldStrategy(elm: any): FieldStrategy;
    /**
     * Indicates the submitting status of the form.
     * True if the form was submitted, but the submit promise is not resolved yet.
     */
    get submitting(): boolean;
    /**
     * Indicates the validating status of the form.
     * True when there is an ongoing validation.
     */
    get validating(): boolean;
    protected performValidation(): Promise<void> | void;
    protected completeValidation(): void;
    protected update(oldValue: T): void;
}
export interface BinderConfiguration<T> {
    onChange?: (oldValue?: T) => void;
    onSubmit?: (value: T) => Promise<T | void>;
}
export {};
