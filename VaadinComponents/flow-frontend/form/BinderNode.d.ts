import { Binder } from "./Binder";
import { _validators, AbstractModel, ArrayModel, ModelValue } from "./Models";
import { Validator, ValueError } from "./Validation";
declare const _ownErrors: unique symbol;
declare const _visited: unique symbol;
/**
 * The BinderNode<T, M> class provides the form binding related APIs
 * with respect to a particular model instance.
 *
 * Structurally, model instances form a tree, in which the object
 * and array models have child nodes of field and array item model
 * instances.
 */
export declare class BinderNode<T, M extends AbstractModel<T>> {
    readonly model: M;
    private [_visited];
    private [_validators];
    private [_ownErrors]?;
    private defaultArrayItemValue?;
    constructor(model: M);
    /**
     * The parent node, if this binder node corresponds to a nested model, otherwise undefined for the top-level binder.
     */
    get parent(): BinderNode<any, AbstractModel<any>> | undefined;
    /**
     * The binder for the top-level model.
     */
    get binder(): Binder<any, AbstractModel<any>>;
    /**
     * The name generated from the model structure, used to set the name attribute on the field components.
     */
    get name(): string;
    /**
     * The current value related to the model
     */
    get value(): T;
    set value(value: T);
    /**
     * The default value related to the model
     */
    get defaultValue(): T;
    /**
     * True if the current value is different from the defaultValue.
     */
    get dirty(): boolean;
    /**
     * The array of validators for the model. The default value is defined in the model.
     */
    get validators(): ReadonlyArray<Validator<T>>;
    set validators(validators: ReadonlyArray<Validator<T>>);
    /**
     * Returns a binder node for the nested model instance.
     *
     * @param model The nested model instance
     */
    for<NM extends AbstractModel<any>>(model: NM): BinderNode<ReturnType<NM["valueOf"]>, NM>;
    /**
     * Runs all validation callbacks potentially affecting this
     * or any nested model. Returns the combined array of all
     * errors as in the errors property.
     */
    validate(): Promise<ReadonlyArray<ValueError<any>>>;
    /**
     * A helper method to add a validator
     *
     * @param validator a validator
     */
    addValidator(validator: Validator<T>): void;
    /**
     * True if the bound field was ever focused and blurred by the user.
     */
    get visited(): boolean;
    set visited(v: boolean);
    /**
     * The combined array of all errors for this node’s model and all its nested models
     */
    get errors(): ReadonlyArray<ValueError<any>>;
    /**
     * The array of validation errors directly related with the model.
     */
    get ownErrors(): readonly ValueError<T>[] | undefined;
    /**
     * Indicates if there is any error for the node's model.
     */
    get invalid(): boolean;
    /**
     * True if the value is required to be non-empty.
     */
    get required(): boolean;
    /**
     * Append an item to the array value.
     *
     * Requires the context model to be an array reference.
     *
     * @param itemValue optional new item value, an empty item is
     * appended if the argument is omitted
     */
    appendItem<IT extends ModelValue<M extends ArrayModel<any, infer IM> ? IM : never>>(itemValue?: IT): void;
    /**
     * Prepend an item to the array value.
     *
     * Requires the context model to be an array reference.
     *
     * @param itemValue optional new item value, an empty item is prepended if
     * the argument is omitted
     */
    prependItem<IT extends ModelValue<M extends ArrayModel<any, infer IM> ? IM : never>>(itemValue?: IT): void;
    /**
     * Remove itself from the parent array value.
     *
     * Requires the context model to be an array item reference.
     */
    removeSelf(): void;
    protected clearValidation(): boolean;
    protected updateValidation(): Promise<void>;
    protected update(_?: T): void;
    protected setErrorsWithDescendants(errors?: ReadonlyArray<ValueError<any>>): void;
    private getChildBinderNodes;
    private runOwnValidators;
    private requestValidationOfDescendants;
    private requestValidationWithAncestors;
    private initializeValue;
    private setValueState;
}
export {};
