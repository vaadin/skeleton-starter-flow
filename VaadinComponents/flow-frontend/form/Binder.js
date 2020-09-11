var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d;
import { BinderNode } from "./BinderNode";
import { _parent } from "./Models";
import { runValidator, ServerValidator, ValidationError } from "./Validation";
import { getDefaultFieldStrategy } from "./Field";
const _submitting = Symbol('submitting');
const _defaultValue = Symbol('defaultValue');
const _value = Symbol('value');
const _emptyValue = Symbol('emptyValue');
const _onChange = Symbol('onChange');
const _onSubmit = Symbol('onSubmit');
const _validations = Symbol('validations');
const _validating = Symbol('validating');
const _validationRequestSymbol = Symbol('validationRequest');
/**
 * A Binder controls all aspects of a single form.
 * Typically it is used to get and set the form value,
 * access the form model, validate, reset, and submit the form.
 *
 * @param <T> is the type of the value that binds to a form
 * @param <M> is the type of the model that describes the structure of the value
 */
export class Binder extends BinderNode {
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
    constructor(context, Model, config) {
        super(new Model({ value: undefined }, 'value', false));
        this.context = context;
        this[_a] = false;
        this[_b] = false;
        this[_c] = undefined;
        this[_d] = new Map();
        this[_emptyValue] = this.model[_parent].value;
        // @ts-ignore
        this.model[_parent] = this;
        if (typeof context.requestUpdate === 'function') {
            this[_onChange] = () => context.requestUpdate();
        }
        this[_onChange] = (config === null || config === void 0 ? void 0 : config.onChange) || this[_onChange];
        this[_onSubmit] = (config === null || config === void 0 ? void 0 : config.onSubmit) || this[_onSubmit];
        this.read(this[_emptyValue]);
    }
    /**
     * The initial value of the form, before any fields are edited by the user.
     */
    get defaultValue() {
        return this[_defaultValue];
    }
    set defaultValue(newValue) {
        this[_defaultValue] = newValue;
    }
    /**
     * The current value of the form.
     */
    get value() {
        return this[_value];
    }
    set value(newValue) {
        if (newValue === this[_value]) {
            return;
        }
        const oldValue = this[_value];
        this[_value] = newValue;
        this.update(oldValue);
        this.updateValidation();
    }
    /**
     * Read the given value into the form and clear validation errors
     *
     * @param value Sets the argument as the new default
     * value before resetting, otherwise the previous default is used.
     */
    read(value) {
        this.defaultValue = value;
        if (
        // Skip when no value is set yet (e. g., invoked from constructor)
        this.value
            // Clear validation state, then proceed if update is needed
            && this.clearValidation()
            // When value is dirty, another update is coming from invoking the value
            // setter below, so we skip this one to prevent duplicate updates
            && this.value === value) {
            this.update(this.value);
        }
        this.value = this.defaultValue;
    }
    /**
     * Reset the form to the previous value
     */
    reset() {
        this.read(this[_defaultValue]);
    }
    /**
     * Sets the form to empty value, as defined in the Model.
     */
    clear() {
        this.read(this[_emptyValue]);
    }
    /**
     * Submit the current form value to a predefined
     * onSubmit callback.
     *
     * It's a no-op if the onSubmit callback is undefined.
     */
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this[_onSubmit] !== undefined) {
                this.submitTo(this[_onSubmit]);
            }
        });
    }
    /**
     * Submit the current form value to callback
     *
     * @param endpointMethod the callback function
     */
    submitTo(endpointMethod) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield this.validate();
            if (errors.length) {
                throw new ValidationError(errors);
            }
            this[_submitting] = true;
            this.update(this.value);
            try {
                return yield endpointMethod.call(this.context, this.value);
            }
            catch (error) {
                if (error.validationErrorData && error.validationErrorData.length) {
                    const valueErrors = [];
                    error.validationErrorData.forEach((data) => {
                        const res = /Object of type '(.+)' has invalid property '(.+)' with value '(.+)', validation error: '(.+)'/.exec(data.message);
                        const [property, value, message] = res ? res.splice(2) : [data.parameterName, undefined, data.message];
                        valueErrors.push({ property, value, validator: new ServerValidator(message), message });
                    });
                    this.setErrorsWithDescendants(valueErrors);
                    error = new ValidationError(valueErrors);
                }
                throw (error);
            }
            finally {
                this[_submitting] = false;
                this.defaultValue = this.value;
                this.update(this.value);
            }
        });
    }
    requestValidation(model, validator) {
        return __awaiter(this, void 0, void 0, function* () {
            let modelValidations;
            if (this[_validations].has(model)) {
                modelValidations = this[_validations].get(model);
            }
            else {
                modelValidations = new Map();
                this[_validations].set(model, modelValidations);
            }
            yield this.performValidation();
            if (modelValidations.has(validator)) {
                return modelValidations.get(validator);
            }
            const promise = runValidator(model, validator);
            modelValidations.set(validator, promise);
            const valueErrors = yield promise;
            modelValidations.delete(validator);
            if (modelValidations.size === 0) {
                this[_validations].delete(model);
            }
            if (this[_validations].size === 0) {
                this.completeValidation();
            }
            return valueErrors;
        });
    }
    /**
     * Determines and returns the field directive strategy for the bound element.
     * Override to customise the binding strategy for a component.
     * The Binder extends BinderNode, see the inherited properties and methods below.
     *
     * @param elm the bound element
     */
    getFieldStrategy(elm) {
        return getDefaultFieldStrategy(elm);
    }
    /**
     * Indicates the submitting status of the form.
     * True if the form was submitted, but the submit promise is not resolved yet.
     */
    get submitting() {
        return this[_submitting];
    }
    /**
     * Indicates the validating status of the form.
     * True when there is an ongoing validation.
     */
    get validating() {
        return this[_validating];
    }
    performValidation() {
        if (!this[_validationRequestSymbol]) {
            this[_validating] = true;
            this[_validationRequestSymbol] = Promise.resolve().then(() => {
                this[_validationRequestSymbol] = undefined;
            });
        }
        return this[_validationRequestSymbol];
    }
    completeValidation() {
        this[_validating] = false;
    }
    update(oldValue) {
        if (this[_onChange]) {
            this[_onChange].call(this.context, oldValue);
        }
    }
}
_a = _submitting, _b = _validating, _c = _validationRequestSymbol, _d = _validations;
//# sourceMappingURL=Binder.js.map