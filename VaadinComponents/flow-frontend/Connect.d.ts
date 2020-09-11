/**
 * An exception that gets thrown for unexpected HTTP response.
 */
export declare class EndpointResponseError extends Error {
    /**
     * The optional response object, containing the HTTP response error
     */
    response: Response;
    /**
     * @param message the `message` property value
     * @param response the `response` property value
     */
    constructor(message: string, response: Response);
}
/**
 * An exception that gets thrown when the Vaadin Connect backend responds
 * with not ok status.
 */
export declare class EndpointError extends Error {
    /**
     * The optional name of the exception that was thrown on a backend
     */
    type?: string;
    /**
     * The optional detail object, containing additional information sent
     * from a backend
     */
    detail?: any;
    /**
     * @param message the `message` property value
     * @param type the `type` property value
     * @param detail the `detail` property value
     */
    constructor(message: string, type?: string, detail?: any);
}
/**
 * An exception that gets thrown if Vaadin Connect backend responds
 * with non-ok status and provides additional info
 * on the validation errors occurred.
 */
export declare class EndpointValidationError extends EndpointError {
    /**
     * An original validation error message.
     */
    validationErrorMessage: string;
    /**
     * An array of the validation errors.
     */
    validationErrorData: ValidationErrorData[];
    /**
     * @param message the `message` property value
     * @param validationErrorData the `validationErrorData` property value
     * @param type the `type` property value
     */
    constructor(message: string, validationErrorData: ValidationErrorData[], type?: string);
}
/**
 * An object, containing all data for the particular validation error.
 */
export declare class ValidationErrorData {
    /**
     * The validation error message.
     */
    message: string;
    /**
     * The parameter name that caused the validation error.
     */
    parameterName?: string;
    /**
     * @param message the `message` property value
     * @param parameterName the `parameterName` property value
     */
    constructor(message: string, parameterName?: string);
}
/**
 * The `ConnectClient` constructor options.
 */
export interface ConnectClientOptions {
    /**
     * The `prefix` property value.
     */
    prefix?: string;
    /**
     * The `middlewares` property value.
     */
    middlewares?: Middleware[];
}
/**
 * An object with the call arguments and the related Request instance.
 * See also {@link ConnectClient.call | the call() method in ConnectClient}.
 */
export interface MiddlewareContext {
    /**
     * The endpoint name.
     */
    endpoint: string;
    /**
     * The method name to call on in the endpoint class.
     */
    method: string;
    /**
     * Optional object with method call arguments.
     */
    params?: any;
    /**
     * The Fetch API Request object reflecting the other properties.
     */
    request: Request;
}
/**
 * An async middleware callback that invokes the next middleware in the chain
 * or makes the actual request.
 * @param context The information about the call and request
 */
export declare type MiddlewareNext = (context: MiddlewareContext) => Promise<Response> | Response;
/**
 * An async callback function that can intercept the request and response
 * of a call.
 * @param context The information about the call and request
 * @param next Invokes the next in the call chain
 */
export declare type Middleware = (context: MiddlewareContext, next: MiddlewareNext) => Promise<Response> | Response;
/**
 * Vaadin Connect client class is a low-level network calling utility. It stores
 * a prefix and facilitates remote calls to endpoint class methods
 * on the Vaadin Connect backend.
 *
 * Example usage:
 *
 * ```js
 * const client = new ConnectClient();
 * const responseData = await client.call('MyEndpoint', 'myMethod');
 * ```
 *
 * ### Prefix
 *
 * The client supports an `prefix` constructor option:
 * ```js
 * const client = new ConnectClient({prefix: '/my-connect-prefix'});
 * ```
 *
 * The default prefix is '/connect'.
 *
 */
export declare class ConnectClient {
    /**
     * The Vaadin Connect backend prefix
     */
    prefix: string;
    /**
     * The array of middlewares that are invoked during a call.
     */
    middlewares: Middleware[];
    /**
     * @param options Constructor options.
     */
    constructor(options?: ConnectClientOptions);
    /**
     * Makes a JSON HTTP request to the `${prefix}/${endpoint}/${method}` URL,
     * optionally supplying the provided params as a JSON request body,
     * and asynchronously returns the parsed JSON response data.
     *
     * @param endpoint Endpoint name.
     * @param method Method name to call in the endpoint class.
     * @param params Optional object to be send in JSON request body.
     * @param options Optional client options for this call.
     * @returns {} Decoded JSON response data.
     */
    call(endpoint: string, method: string, params?: any): Promise<any>;
    private loading;
}
