import { BinderNode } from "./BinderNode";
import { Validator } from "./Validation";
export declare const _ItemModel: unique symbol;
export declare const _parent: unique symbol;
export declare const _key: unique symbol;
export declare const _fromString: unique symbol;
export declare const _validators: unique symbol;
export declare const _binderNode: unique symbol;
export declare const _getPropertyModel: unique symbol;
declare const _properties: unique symbol;
declare const _optional: unique symbol;
interface HasFromString<T> {
    [_fromString](value: string): T;
}
export interface HasValue<T> {
    value?: T;
}
export declare type ModelParent<T> = AbstractModel<any> | HasValue<T>;
export declare type ModelValue<M extends AbstractModel<any>> = ReturnType<M["valueOf"]>;
export interface ModelConstructor<T, M extends AbstractModel<T>> {
    createEmptyValue: () => T;
    new (parent: ModelParent<T>, key: keyof any, optional: boolean, ...args: any[]): M;
}
declare type ModelVariableArguments<C extends ModelConstructor<any, AbstractModel<any>>> = C extends new (parent: ModelParent<any>, key: keyof any, ...args: infer R) => any ? R : never;
export declare abstract class AbstractModel<T> {
    static createEmptyValue(): unknown;
    readonly [_parent]: ModelParent<T>;
    readonly [_validators]: ReadonlyArray<Validator<T>>;
    readonly [_optional]: boolean;
    [_binderNode]?: BinderNode<T, this>;
    [_key]: keyof any;
    constructor(parent: ModelParent<T>, key: keyof any, optional: boolean, ...validators: ReadonlyArray<Validator<T>>);
    toString(): string;
    valueOf(): T;
}
export declare abstract class PrimitiveModel<T> extends AbstractModel<T> {
}
export declare class BooleanModel extends PrimitiveModel<boolean> implements HasFromString<boolean> {
    static createEmptyValue: BooleanConstructor;
    [_fromString]: BooleanConstructor;
}
export declare class NumberModel extends PrimitiveModel<number> implements HasFromString<number> {
    static createEmptyValue: NumberConstructor;
    [_fromString]: NumberConstructor;
}
export declare class StringModel extends PrimitiveModel<string> implements HasFromString<string> {
    static createEmptyValue: StringConstructor;
    [_fromString]: StringConstructor;
}
export declare class ObjectModel<T> extends AbstractModel<T> {
    static createEmptyValue(): {};
    private [_properties];
    protected [_getPropertyModel]<N extends keyof T, C extends new (parent: ModelParent<NonNullable<T[N]>>, key: keyof any, optional: boolean, ...args: any[]) => any>(name: N, ValueModel: C, valueModelArgs: any[]): InstanceType<C>;
}
export declare class ArrayModel<T, M extends AbstractModel<T>> extends AbstractModel<ReadonlyArray<T>> {
    static createEmptyValue(): readonly unknown[];
    private readonly [_ItemModel];
    private readonly itemModelArgs;
    private readonly itemModels;
    constructor(parent: ModelParent<ReadonlyArray<T>>, key: keyof any, optional: boolean, ItemModel: ModelConstructor<T, M>, itemModelArgs: ModelVariableArguments<typeof ItemModel>, ...validators: ReadonlyArray<Validator<ReadonlyArray<T>>>);
    /**
     * Iterates the current array value and yields a binder node for every item.
     */
    [Symbol.iterator](): IterableIterator<BinderNode<T, M>>;
}
export declare function getBinderNode<M extends AbstractModel<any>, T = ModelValue<M>>(model: M): BinderNode<T, M>;
export {};
