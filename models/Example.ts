/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.181.37085-cf05a13421a3
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Example
 */
export interface Example {
    /**
     * 
     * @type {string}
     * @memberof Example
     */
    description?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Example
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof Example
     */
    externalValue?: string;
    /**
     * 
     * @type {string}
     * @memberof Example
     */
    get$ref?: string;
    /**
     * 
     * @type {string}
     * @memberof Example
     */
    summary?: string;
    /**
     * 
     * @type {object}
     * @memberof Example
     */
    value?: object;
    /**
     * 
     * @type {boolean}
     * @memberof Example
     */
    valueSetFlag?: boolean;
}

/**
 * Check if a given object implements the Example interface.
 */
export function instanceOfExample(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExampleFromJSON(json: any): Example {
    return ExampleFromJSONTyped(json, false);
}

export function ExampleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Example {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'externalValue': !exists(json, 'externalValue') ? undefined : json['externalValue'],
        'get$ref': !exists(json, 'get$ref') ? undefined : json['get$ref'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'valueSetFlag': !exists(json, 'valueSetFlag') ? undefined : json['valueSetFlag'],
    };
}

export function ExampleToJSON(value?: Example | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'extensions': value.extensions,
        'externalValue': value.externalValue,
        'get$ref': value.get$ref,
        'summary': value.summary,
        'value': value.value,
        'valueSetFlag': value.valueSetFlag,
    };
}
