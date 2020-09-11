/* tslint:disable:max-classes-per-file */
var _a, _b, _c, _d;
import { BinderNode } from "./BinderNode";
export const _ItemModel = Symbol('ItemModel');
export const _parent = Symbol('parent');
export const _key = Symbol('key');
export const _fromString = Symbol('fromString');
export const _validators = Symbol('validators');
export const _binderNode = Symbol('binderNode');
export const _getPropertyModel = Symbol('getPropertyModel');
const _properties = Symbol('properties');
const _optional = Symbol('optional');
export class AbstractModel {
    constructor(parent, key, optional, ...validators) {
        this[_parent] = parent;
        this[_key] = key;
        this[_optional] = optional;
        this[_validators] = validators;
    }
    static createEmptyValue() {
        return undefined;
    }
    toString() {
        return String(this.valueOf());
    }
    valueOf() {
        return getBinderNode(this).value;
    }
}
export class PrimitiveModel extends AbstractModel {
}
export class BooleanModel extends PrimitiveModel {
    constructor() {
        super(...arguments);
        this[_a] = Boolean;
    }
}
_a = _fromString;
BooleanModel.createEmptyValue = Boolean;
export class NumberModel extends PrimitiveModel {
    constructor() {
        super(...arguments);
        this[_b] = Number;
    }
}
_b = _fromString;
NumberModel.createEmptyValue = Number;
export class StringModel extends PrimitiveModel {
    constructor() {
        super(...arguments);
        this[_c] = String;
    }
}
_c = _fromString;
StringModel.createEmptyValue = String;
export class ObjectModel extends AbstractModel {
    constructor() {
        super(...arguments);
        this[_d] = {};
    }
    static createEmptyValue() {
        const modelInstance = new this({ value: undefined }, 'value', false);
        let obj = {};
        // Iterate the model class hierarchy up to the ObjectModel, and extract
        // the property getter names from every prototypes
        for (let proto = Object.getPrototypeOf(modelInstance); proto !== ObjectModel.prototype; proto = Object.getPrototypeOf(proto)) {
            obj = Object.getOwnPropertyNames(proto)
                .filter(propertyName => propertyName !== 'constructor')
                // Initialise the properties in the value object with empty value
                .reduce((o, propertyName) => {
                const propertyModel = modelInstance[propertyName];
                // Skip initialising optional properties
                if (!propertyModel[_optional]) {
                    o[propertyName] = propertyModel.constructor.createEmptyValue();
                }
                return o;
            }, obj);
        }
        return obj;
    }
    [(_d = _properties, _getPropertyModel)](name, ValueModel, valueModelArgs) {
        const [optional, ...rest] = valueModelArgs;
        return this[_properties][name] !== undefined ?
            this[_properties][name]
            : (this[_properties][name] = new ValueModel(this, name, optional, ...rest));
    }
}
export class ArrayModel extends AbstractModel {
    constructor(parent, key, optional, ItemModel, itemModelArgs, ...validators) {
        super(parent, key, optional, ...validators);
        this.itemModels = [];
        this[_ItemModel] = ItemModel;
        this.itemModelArgs = itemModelArgs;
    }
    static createEmptyValue() {
        return [];
    }
    /**
     * Iterates the current array value and yields a binder node for every item.
     */
    *[Symbol.iterator]() {
        const array = getBinderNode(this).value;
        const ItemModel = this[_ItemModel];
        if (array.length !== this.itemModels.length) {
            this.itemModels.length = array.length;
        }
        for (const i of array.keys()) {
            let itemModel = this.itemModels[i];
            if (!itemModel) {
                const [optional, ...rest] = this.itemModelArgs;
                itemModel = new ItemModel(this, i, optional, ...rest);
                this.itemModels[i] = itemModel;
            }
            yield getBinderNode(itemModel);
        }
    }
}
export function getBinderNode(model) {
    return model[_binderNode] || (model[_binderNode] = new BinderNode(model));
}
//# sourceMappingURL=Models.js.map