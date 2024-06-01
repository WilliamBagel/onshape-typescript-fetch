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
import type { ApiResponseContent } from './ApiResponseContent';
import {
    ApiResponseContentFromJSON,
    ApiResponseContentFromJSONTyped,
    ApiResponseContentToJSON,
} from './ApiResponseContent';
import type { Example } from './Example';
import {
    ExampleFromJSON,
    ExampleFromJSONTyped,
    ExampleToJSON,
} from './Example';
import type { Schema } from './Schema';
import {
    SchemaFromJSON,
    SchemaFromJSONTyped,
    SchemaToJSON,
} from './Schema';
import type { StyleEnum } from './StyleEnum';
import {
    StyleEnumFromJSON,
    StyleEnumFromJSONTyped,
    StyleEnumToJSON,
} from './StyleEnum';

/**
 * 
 * @export
 * @interface Parameter
 */
export interface Parameter {
    /**
     * 
     * @type {boolean}
     * @memberof Parameter
     */
    allowEmptyValue?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Parameter
     */
    allowReserved?: boolean;
    /**
     * 
     * @type {ApiResponseContent}
     * @memberof Parameter
     */
    content?: ApiResponseContent;
    /**
     * 
     * @type {boolean}
     * @memberof Parameter
     */
    deprecated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    description?: string;
    /**
     * 
     * @type {object}
     * @memberof Parameter
     */
    example?: object;
    /**
     * 
     * @type {{ [key: string]: Example; }}
     * @memberof Parameter
     */
    examples?: { [key: string]: Example; };
    /**
     * 
     * @type {boolean}
     * @memberof Parameter
     */
    explode?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Parameter
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    get$ref?: string;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    _in?: string;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Parameter
     */
    required?: boolean;
    /**
     * 
     * @type {Schema}
     * @memberof Parameter
     */
    schema?: Schema;
    /**
     * 
     * @type {StyleEnum}
     * @memberof Parameter
     */
    style?: StyleEnum;
}

/**
 * Check if a given object implements the Parameter interface.
 */
export function instanceOfParameter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ParameterFromJSON(json: any): Parameter {
    return ParameterFromJSONTyped(json, false);
}

export function ParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Parameter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowEmptyValue': !exists(json, 'allowEmptyValue') ? undefined : json['allowEmptyValue'],
        'allowReserved': !exists(json, 'allowReserved') ? undefined : json['allowReserved'],
        'content': !exists(json, 'content') ? undefined : ApiResponseContentFromJSON(json['content']),
        'deprecated': !exists(json, 'deprecated') ? undefined : json['deprecated'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'example': !exists(json, 'example') ? undefined : json['example'],
        'examples': !exists(json, 'examples') ? undefined : (mapValues(json['examples'], ExampleFromJSON)),
        'explode': !exists(json, 'explode') ? undefined : json['explode'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'get$ref': !exists(json, 'get$ref') ? undefined : json['get$ref'],
        '_in': !exists(json, 'in') ? undefined : json['in'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'schema': !exists(json, 'schema') ? undefined : SchemaFromJSON(json['schema']),
        'style': !exists(json, 'style') ? undefined : StyleEnumFromJSON(json['style']),
    };
}

export function ParameterToJSON(value?: Parameter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowEmptyValue': value.allowEmptyValue,
        'allowReserved': value.allowReserved,
        'content': ApiResponseContentToJSON(value.content),
        'deprecated': value.deprecated,
        'description': value.description,
        'example': value.example,
        'examples': value.examples === undefined ? undefined : (mapValues(value.examples, ExampleToJSON)),
        'explode': value.explode,
        'extensions': value.extensions,
        'get$ref': value.get$ref,
        'in': value._in,
        'name': value.name,
        'required': value.required,
        'schema': SchemaToJSON(value.schema),
        'style': StyleEnumToJSON(value.style),
    };
}
