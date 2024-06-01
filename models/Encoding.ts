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
import type { Header } from './Header';
import {
    HeaderFromJSON,
    HeaderFromJSONTyped,
    HeaderToJSON,
} from './Header';
import type { StyleEnum } from './StyleEnum';
import {
    StyleEnumFromJSON,
    StyleEnumFromJSONTyped,
    StyleEnumToJSON,
} from './StyleEnum';

/**
 * 
 * @export
 * @interface Encoding
 */
export interface Encoding {
    /**
     * 
     * @type {boolean}
     * @memberof Encoding
     */
    allowReserved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Encoding
     */
    contentType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Encoding
     */
    explode?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Encoding
     */
    extensions?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: Header; }}
     * @memberof Encoding
     */
    headers?: { [key: string]: Header; };
    /**
     * 
     * @type {StyleEnum}
     * @memberof Encoding
     */
    style?: StyleEnum;
}

/**
 * Check if a given object implements the Encoding interface.
 */
export function instanceOfEncoding(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EncodingFromJSON(json: any): Encoding {
    return EncodingFromJSONTyped(json, false);
}

export function EncodingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Encoding {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowReserved': !exists(json, 'allowReserved') ? undefined : json['allowReserved'],
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'explode': !exists(json, 'explode') ? undefined : json['explode'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'headers': !exists(json, 'headers') ? undefined : (mapValues(json['headers'], HeaderFromJSON)),
        'style': !exists(json, 'style') ? undefined : StyleEnumFromJSON(json['style']),
    };
}

export function EncodingToJSON(value?: Encoding | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowReserved': value.allowReserved,
        'contentType': value.contentType,
        'explode': value.explode,
        'extensions': value.extensions,
        'headers': value.headers === undefined ? undefined : (mapValues(value.headers, HeaderToJSON)),
        'style': StyleEnumToJSON(value.style),
    };
}
