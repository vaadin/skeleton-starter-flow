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
const $wnd = window;
$wnd.Vaadin = $wnd.Vaadin || {};
$wnd.Vaadin.registrations = $wnd.Vaadin.registrations || [];
$wnd.Vaadin.registrations.push({
    is: 'endpoint'
});
const throwConnectException = (errorJson) => {
    if (errorJson.validationErrorData) {
        throw new EndpointValidationError(errorJson.message, errorJson.validationErrorData, errorJson.type);
    }
    else {
        throw new EndpointError(errorJson.message, errorJson.type, errorJson.detail);
    }
};
/**
 * Throws a TypeError if the response is not 200 OK.
 * @param response The response to assert.
 * @ignore
 */
const assertResponseIsOk = (response) => __awaiter(void 0, void 0, void 0, function* () {
    if (!response.ok) {
        const errorText = yield response.text();
        let errorJson;
        try {
            errorJson = JSON.parse(errorText);
        }
        catch (ignored) {
            // not a json
            errorJson = null;
        }
        if (errorJson !== null) {
            throwConnectException(errorJson);
        }
        else if (errorText !== null && errorText.length > 0) {
            throw new EndpointResponseError(errorText, response);
        }
        else {
            throw new EndpointError('expected "200 OK" response, but got ' +
                `${response.status} ${response.statusText}`);
        }
    }
});
/**
 * An exception that gets thrown for unexpected HTTP response.
 */
export class EndpointResponseError extends Error {
    /**
     * @param message the `message` property value
     * @param response the `response` property value
     */
    constructor(message, response) {
        super(message);
        this.response = response;
    }
}
/**
 * An exception that gets thrown when the Vaadin Connect backend responds
 * with not ok status.
 */
export class EndpointError extends Error {
    /**
     * @param message the `message` property value
     * @param type the `type` property value
     * @param detail the `detail` property value
     */
    constructor(message, type, detail) {
        super(message);
        this.type = type;
        this.detail = detail;
    }
}
/**
 * An exception that gets thrown if Vaadin Connect backend responds
 * with non-ok status and provides additional info
 * on the validation errors occurred.
 */
export class EndpointValidationError extends EndpointError {
    /**
     * @param message the `message` property value
     * @param validationErrorData the `validationErrorData` property value
     * @param type the `type` property value
     */
    constructor(message, validationErrorData, type) {
        super(message, type, validationErrorData);
        this.validationErrorMessage = message;
        this.detail = null;
        this.validationErrorData = validationErrorData;
    }
}
/**
 * An object, containing all data for the particular validation error.
 */
export class ValidationErrorData {
    /**
     * @param message the `message` property value
     * @param parameterName the `parameterName` property value
     */
    constructor(message, parameterName) {
        this.message = message;
        this.parameterName = parameterName;
    }
}
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
export class ConnectClient {
    /**
     * @param options Constructor options.
     */
    constructor(options = {}) {
        /**
         * The Vaadin Connect backend prefix
         */
        this.prefix = '/connect';
        /**
         * The array of middlewares that are invoked during a call.
         */
        this.middlewares = [];
        if (options.prefix) {
            this.prefix = options.prefix;
        }
        if (options.middlewares) {
            this.middlewares = options.middlewares;
        }
    }
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
    call(endpoint, method, params) {
        return __awaiter(this, arguments, void 0, function* () {
            if (arguments.length < 2) {
                throw new TypeError(`2 arguments required, but got only ${arguments.length}`);
            }
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-Token': $wnd.Vaadin.TypeScript && $wnd.Vaadin.TypeScript.csrfToken || ''
            };
            // helper to keep the undefined value in object after JSON.stringify
            const nullForUndefined = (obj) => {
                for (const property in obj) {
                    if (obj[property] === undefined) {
                        obj[property] = null;
                    }
                }
                return obj;
            };
            const request = new Request(`${this.prefix}/${endpoint}/${method}`, {
                method: 'POST',
                headers,
                body: params !== undefined ? JSON.stringify(nullForUndefined(params)) : undefined
            });
            // The middleware `context`, includes the call arguments and the request
            // constructed from them
            const initialContext = {
                endpoint,
                method,
                params,
                request
            };
            // The internal middleware to assert and parse the response. The internal
            // response handling should come last after the other middlewares are done
            // with processing the response. That is why this middleware is first
            // in the final middlewares array.
            const responseHandlerMiddleware = (context, next) => __awaiter(this, void 0, void 0, function* () {
                const response = yield next(context);
                yield assertResponseIsOk(response);
                return response.json();
            });
            // The actual fetch call itself is expressed as a middleware
            // chain item for our convenience. Always having an ending of the chain
            // this way makes the folding down below more concise.
            const fetchNext = (context) => __awaiter(this, void 0, void 0, function* () {
                this.loading(true);
                return fetch(context.request).then(response => {
                    this.loading(false);
                    return response;
                });
            });
            // Assemble the final middlewares array from internal
            // and external middlewares
            const middlewares = [responseHandlerMiddleware].concat(this.middlewares);
            // Fold the final middlewares array into a single function
            const chain = middlewares.reduceRight((next, middleware) => {
                // Compose and return the new chain step, that takes the context and
                // invokes the current middleware with the context and the further chain
                // as the next argument
                return (context => middleware(context, next));
            }, 
            // Initialize reduceRight the accumulator with `fetchNext`
            fetchNext);
            // Invoke all the folded async middlewares and return
            return chain(initialContext);
        });
    }
    // Re-use flow loading indicator when fetching endpoints
    loading(action) {
        var _a;
        if ((_a = $wnd.Vaadin.Flow) === null || _a === void 0 ? void 0 : _a.loading) {
            $wnd.Vaadin.Flow.loading(action);
        }
    }
}
//# sourceMappingURL=Connect.js.map