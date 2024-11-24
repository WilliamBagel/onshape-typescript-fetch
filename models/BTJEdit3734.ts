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
import {
     BTJEditChange2636FromJSONTyped,
     BTJEditDelete1992FromJSONTyped,
     BTJEditInsert2523FromJSONTyped,
     BTJEditList2707FromJSONTyped,
     BTJEditMove3245FromJSONTyped
} from './';

/**
 * An edit that will be applied to the application element's json data.
 * @export
 * @interface BTJEdit3734
 */
export interface BTJEdit3734 {
    /**
     * 
     * @type {string}
     * @memberof BTJEdit3734
     */
    btType: string;
}

/**
 * Check if a given object implements the BTJEdit3734 interface.
 */
export function instanceOfBTJEdit3734(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "btType" in value;

    return isInstance;
}

export function BTJEdit3734FromJSON(json: any): BTJEdit3734 {
    return BTJEdit3734FromJSONTyped(json, false);
}

export function BTJEdit3734FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJEdit3734 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTJEditChange-2636') {
            return BTJEditChange2636FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTJEditDelete-1992') {
            return BTJEditDelete1992FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTJEditInsert-2523') {
            return BTJEditInsert2523FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTJEditList-2707') {
            return BTJEditList2707FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTJEditMove-3245') {
            return BTJEditMove3245FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': json['btType'],
    };
}

export function BTJEdit3734ToJSON(value?: BTJEdit3734 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
    };
}

