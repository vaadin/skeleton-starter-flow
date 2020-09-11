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
import { directive, PropertyPart } from "lit-html";
import { _fromString, getBinderNode } from "./Models";
const fieldStateMap = new WeakMap();
export class AbstractFieldStrategy {
    constructor(element) {
        this.element = element;
        this.validate = () => __awaiter(this, void 0, void 0, function* () { return []; });
    }
    get value() { return this.element.value; }
    set value(value) { this.element.value = value; }
    set errorMessage(_) { }
    setAttribute(key, val) {
        if (val) {
            this.element.setAttribute(key, '');
        }
        else {
            this.element.removeAttribute(key);
        }
    }
}
export class VaadinFieldStrategy extends AbstractFieldStrategy {
    set required(value) { this.element.required = value; }
    set invalid(value) { this.element.invalid = value; }
    set errorMessage(value) { this.element.errorMessage = value; }
}
export class GenericFieldStrategy extends AbstractFieldStrategy {
    set required(value) { this.setAttribute('required', value); }
    set invalid(value) { this.setAttribute('invalid', value); }
}
export class CheckedFieldStrategy extends GenericFieldStrategy {
    set value(val) {
        this.element.checked = /^(true|on)$/i.test(String(val));
    }
    get value() {
        return this.element.checked;
    }
}
export class SelectedFieldStrategy extends GenericFieldStrategy {
    set value(val) {
        this.element.selected = val;
    }
    get value() {
        return this.element.selected;
    }
}
export function getDefaultFieldStrategy(elm) {
    switch (elm.localName) {
        case 'vaadin-checkbox':
        case 'vaadin-radio-button':
            return new CheckedFieldStrategy(elm);
        case 'vaadin-list-box':
            return new SelectedFieldStrategy(elm);
        case 'vaadin-rich-text-editor':
            return new GenericFieldStrategy(elm);
        case 'input': if (/^(checkbox|radio)$/.test(elm.type)) {
            return new CheckedFieldStrategy(elm);
        }
    }
    return elm.constructor.version ? new VaadinFieldStrategy(elm) : new GenericFieldStrategy(elm);
}
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
export const field = directive((model, effect) => (part) => {
    const propertyPart = part;
    if (!(part instanceof PropertyPart) || propertyPart.committer.name !== '..') {
        throw new Error('Only supports ...="" syntax');
    }
    let fieldState;
    const element = propertyPart.committer.element;
    const binderNode = getBinderNode(model);
    const fieldStrategy = binderNode.binder.getFieldStrategy(element);
    if (fieldStateMap.has(propertyPart)) {
        fieldState = fieldStateMap.get(propertyPart);
    }
    else {
        fieldState = {
            name: '',
            value: '',
            required: false,
            invalid: false,
            errorMessage: '',
            strategy: fieldStrategy
        };
        fieldStateMap.set(propertyPart, fieldState);
        const updateValueFromElement = () => {
            fieldState.value = fieldState.strategy.value;
            const convert = typeof fieldState.value === 'string' && model[_fromString];
            binderNode.value = convert ? convert(fieldState.value) : fieldState.value;
            if (effect !== undefined) {
                effect.call(element, element);
            }
        };
        element.oninput = () => {
            updateValueFromElement();
        };
        element.onchange = element.onblur = () => {
            updateValueFromElement();
            binderNode.visited = true;
        };
        element.checkValidity = () => !fieldState.invalid;
    }
    const name = binderNode.name;
    if (name !== fieldState.name) {
        fieldState.name = name;
        element.setAttribute('name', name);
    }
    const value = binderNode.value;
    if (value !== fieldState.value) {
        fieldState.strategy.value = fieldState.value = value;
    }
    const required = binderNode.required;
    if (required !== fieldState.required) {
        fieldState.strategy.required = fieldState.required = required;
    }
    const firstError = binderNode.ownErrors ? binderNode.ownErrors[0] : undefined;
    const errorMessage = firstError && firstError.message || '';
    if (errorMessage !== fieldState.errorMessage) {
        fieldState.strategy.errorMessage = fieldState.errorMessage = errorMessage;
    }
    const invalid = binderNode.invalid;
    if (invalid !== fieldState.invalid) {
        fieldState.strategy.invalid = fieldState.invalid = invalid;
    }
});
//# sourceMappingURL=Field.js.map