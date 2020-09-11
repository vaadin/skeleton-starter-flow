var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import { _binderNode, _ItemModel, _key, _parent, _validators, AbstractModel, ArrayModel, getBinderNode, ObjectModel } from "./Models";
const _ownErrors = Symbol('ownErrorsSymbol');
const _visited = Symbol('visited');
function getErrorPropertyName(valueError) {
    return typeof valueError.property === 'string'
        ? valueError.property
        : getBinderNode(valueError.property).name;
}
/**
 * The BinderNode<T, M> class provides the form binding related APIs
 * with respect to a particular model instance.
 *
 * Structurally, model instances form a tree, in which the object
 * and array models have child nodes of field and array item model
 * instances.
 */
export class BinderNode {
    constructor(model) {
        this.model = model;
        this[_a] = false;
        model[_binderNode] = this;
        this.initializeValue();
        this[_validators] = model[_validators];
    }
    /**
     * The parent node, if this binder node corresponds to a nested model, otherwise undefined for the top-level binder.
     */
    get parent() {
        const modelParent = this.model[_parent];
        return modelParent instanceof AbstractModel
            ? getBinderNode(modelParent)
            : undefined;
    }
    /**
     * The binder for the top-level model.
     */
    get binder() {
        return this.parent ? this.parent.binder : this;
    }
    /**
     * The name generated from the model structure, used to set the name attribute on the field components.
     */
    get name() {
        let model = this.model;
        const strings = [];
        while (model[_parent] instanceof AbstractModel) {
            strings.unshift(String(model[_key]));
            model = model[_parent];
        }
        return strings.join('.');
    }
    /**
     * The current value related to the model
     */
    get value() {
        return this.parent.value[this.model[_key]];
    }
    set value(value) {
        this.setValueState(value);
    }
    /**
     * The default value related to the model
     */
    get defaultValue() {
        if (this.parent && this.parent.model instanceof ArrayModel) {
            return this.parent.defaultArrayItemValue || (this.parent.defaultArrayItemValue = this.parent.model[_ItemModel].createEmptyValue());
        }
        return this.parent.defaultValue[this.model[_key]];
    }
    /**
     * True if the current value is different from the defaultValue.
     */
    get dirty() {
        return this.value !== this.defaultValue;
    }
    /**
     * The array of validators for the model. The default value is defined in the model.
     */
    get validators() {
        return this[_validators];
    }
    set validators(validators) {
        this[_validators] = validators;
    }
    /**
     * Returns a binder node for the nested model instance.
     *
     * @param model The nested model instance
     */
    for(model) {
        const binderNode = getBinderNode(model);
        if (binderNode.binder !== this.binder) {
            throw new Error('Unknown binder');
        }
        return binderNode;
    }
    /**
     * Runs all validation callbacks potentially affecting this
     * or any nested model. Returns the combined array of all
     * errors as in the errors property.
     */
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Replace reduce() with flat() when the following issue is solved
            //  https://github.com/vaadin/flow/issues/8658
            const errors = (yield Promise.all([
                ...this.requestValidationOfDescendants(),
                ...this.requestValidationWithAncestors()
            ])).reduce((acc, val) => acc.concat(val), [])
                .filter(valueError => valueError);
            this.setErrorsWithDescendants(errors.length ? errors : undefined);
            this.update();
            return errors;
        });
    }
    /**
     * A helper method to add a validator
     *
     * @param validator a validator
     */
    addValidator(validator) {
        this.validators = [...this[_validators], validator];
    }
    /**
     * True if the bound field was ever focused and blurred by the user.
     */
    get visited() {
        return this[_visited];
    }
    set visited(v) {
        if (this[_visited] !== v) {
            this[_visited] = v;
            this.updateValidation();
        }
    }
    /**
     * The combined array of all errors for this node’s model and all its nested models
     */
    get errors() {
        const descendantsErrors = [
            ...this.getChildBinderNodes()
        ].reduce((errors, childBinderNode) => [
            ...errors,
            ...childBinderNode.errors
        ], []);
        return descendantsErrors.concat(this.ownErrors);
    }
    /**
     * The array of validation errors directly related with the model.
     */
    get ownErrors() {
        return this[_ownErrors] ? this[_ownErrors] : [];
    }
    /**
     * Indicates if there is any error for the node's model.
     */
    get invalid() {
        return this.errors.length > 0;
    }
    /**
     * True if the value is required to be non-empty.
     */
    get required() {
        return this[_validators].some(validator => validator.impliesRequired);
    }
    /**
     * Append an item to the array value.
     *
     * Requires the context model to be an array reference.
     *
     * @param itemValue optional new item value, an empty item is
     * appended if the argument is omitted
     */
    appendItem(itemValue) {
        if (!(this.model instanceof ArrayModel)) {
            throw new Error('Model is not an array');
        }
        if (!itemValue) {
            itemValue = this.model[_ItemModel].createEmptyValue();
        }
        this.value = [...this.value, itemValue];
    }
    /**
     * Prepend an item to the array value.
     *
     * Requires the context model to be an array reference.
     *
     * @param itemValue optional new item value, an empty item is prepended if
     * the argument is omitted
     */
    prependItem(itemValue) {
        if (!(this.model instanceof ArrayModel)) {
            throw new Error('Model is not an array');
        }
        if (!itemValue) {
            itemValue = this.model[_ItemModel].createEmptyValue();
        }
        this.value = [itemValue, ...this.value];
    }
    /**
     * Remove itself from the parent array value.
     *
     * Requires the context model to be an array item reference.
     */
    removeSelf() {
        if (!(this.model[_parent] instanceof ArrayModel)) {
            throw new TypeError('Model is not an array item');
        }
        const itemIndex = this.model[_key];
        this.parent.value = (this.parent.value.filter((_, i) => i !== itemIndex));
    }
    clearValidation() {
        if (this[_visited]) {
            this[_visited] = false;
        }
        let needsUpdate = false;
        if (this[_ownErrors]) {
            this[_ownErrors] = undefined;
            needsUpdate = true;
        }
        if ([...this.getChildBinderNodes()]
            .filter(childBinderNode => childBinderNode.clearValidation())
            .length > 0) {
            needsUpdate = true;
        }
        return needsUpdate;
    }
    updateValidation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this[_visited]) {
                yield this.validate();
            }
            else {
                if (this.dirty || this.invalid) {
                    yield Promise.all([...this.getChildBinderNodes()].map(childBinderNode => childBinderNode.updateValidation()));
                }
            }
        });
    }
    update(_) {
        if (this.parent) {
            this.parent.update();
        }
    }
    setErrorsWithDescendants(errors) {
        const name = this.name;
        const ownErrors = errors ?
            errors.filter(valueError => getErrorPropertyName(valueError) === name) : undefined;
        const relatedErrors = errors ?
            errors.filter(valueError => getErrorPropertyName(valueError).startsWith(name)) : undefined;
        this[_ownErrors] = ownErrors;
        for (const childBinderNode of this.getChildBinderNodes()) {
            childBinderNode.setErrorsWithDescendants(relatedErrors);
        }
    }
    *getChildBinderNodes() {
        if (this.model instanceof ObjectModel) {
            if (this.value) {
                for (const key of Object.keys(this.value)) {
                    const childModel = this.model[key];
                    if (childModel) {
                        yield getBinderNode(childModel);
                    }
                }
            }
        }
        else if (this.model instanceof ArrayModel) {
            for (const childModel of this.model) {
                yield childModel;
            }
        }
    }
    runOwnValidators() {
        return this[_validators].map(validator => this.binder.requestValidation(this.model, validator));
    }
    requestValidationOfDescendants() {
        return [...this.getChildBinderNodes()].reduce((promises, childBinderNode) => [
            ...promises,
            ...childBinderNode.runOwnValidators(),
            ...childBinderNode.requestValidationOfDescendants()
        ], []);
    }
    requestValidationWithAncestors() {
        return [
            ...this.runOwnValidators(),
            ...(this.parent ? this.parent.requestValidationWithAncestors() : [])
        ];
    }
    initializeValue() {
        // First, make sure parents have value initialized
        if (this.parent && ((this.parent.value === undefined) || (this.parent.defaultValue === undefined))) {
            this.parent.initializeValue();
        }
        let value = this.parent
            ? this.parent.value[this.model[_key]]
            : undefined;
        if (value === undefined) {
            // Initialize value if necessary
            value = value !== undefined
                ? value
                : this.model.constructor.createEmptyValue();
            this.setValueState(value, this.defaultValue === undefined);
        }
    }
    setValueState(value, keepPristine = false) {
        const modelParent = this.model[_parent];
        if (modelParent instanceof ArrayModel) {
            // Value contained in array - replace array in parent
            const array = this.parent.value.slice();
            array[this.model[_key]] = value;
            this.parent.setValueState(array, keepPristine);
        }
        else if (modelParent instanceof ObjectModel) {
            // Value contained in object - replace object in parent
            const object = Object.assign(Object.assign({}, this.parent.value), { [this.model[_key]]: value });
            this.parent.setValueState(object, keepPristine);
        }
        else {
            // Value contained elsewhere, probably binder - use value property setter
            const binder = modelParent;
            if (keepPristine && !binder.dirty) {
                binder.defaultValue = value;
            }
            binder.value = value;
        }
    }
}
_a = _visited;
//# sourceMappingURL=BinderNode.js.map