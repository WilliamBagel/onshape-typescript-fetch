/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * ## Welcome to the Onshape REST API Explorer  To use this API explorer, sign in to your [Onshape](https://cad.onshape.com) account in another tab, then click the **Try it out** button below (it toggles to a **Cancel** button when selected).  See the **[API Explorer Guide](https://onshape-public.github.io/docs/api-intro/explorer/)** for help navigating this API Explorer, including **[authentication](https://onshape-public.github.io/docs/api-intro/explorer/#authentication)**.  **Tip:** To ensure the current session isn\'t used when trying other authentication techniques, make sure to [remove the Onshape cookie](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site) as per the instructions for your browser. Alternatively, you can use a private or incognito window.  ## See Also  * [Onshape API Guide](https://onshape-public.github.io/docs/): Our full suite of developer guides, to be used as an accompaniment to this API Explorer. * [Onshape Developer Portal](https://dev-portal.onshape.com/): The Onshape portal for managing your API keys, OAuth2 credentials, your Onshape applications, and your Onshape App Store entries. * [Authentication Guide](https://onshape-public.github.io/docs/auth/): Our guide to using API keys, request signatures, and OAuth2 in  your Onshape applications.
 *
 * The version of the OpenAPI document: 1.176.31157-f17972084104
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTJEdit3734 } from './BTJEdit3734';
import {
    BTJEdit3734FromJSON,
    BTJEdit3734FromJSONTyped,
    BTJEdit3734ToJSON,
 BTJEdit3734SuperToJSON,
} from './BTJEdit3734';

/**
 * A list of edits that will be applied in order.
 * @export
 * @interface BTJEditList2707
 */
export interface BTJEditList2707 extends BTJEdit3734 {
    /**
     * 
     * @type {string}
     * @memberof BTJEditList2707
     */
    btType: string;
    /**
     * 
     * @type {Array<BTJEdit3734>}
     * @memberof BTJEditList2707
     */
    edits?: Array<BTJEdit3734>;
}

/**
 * Check if a given object implements the BTJEditList2707 interface.
 */
export function instanceOfBTJEditList2707(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "btType" in value;

    return isInstance;
}

export function BTJEditList2707FromJSON(json: any): BTJEditList2707 {
    return BTJEditList2707FromJSONTyped(json, false);
}

export function BTJEditList2707FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJEditList2707 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTJEdit3734FromJSONTyped(json, ignoreDiscriminator),
        'btType': json['btType'],
        'edits': !exists(json, 'edits') ? undefined : ((json['edits'] as Array<any>).map(BTJEdit3734FromJSON)),
    };
}

export function BTJEditList2707ToJSON(value?: BTJEditList2707 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTJEdit3734SuperToJSON(value),
        'btType': value.btType,
        'edits': value.edits === undefined ? undefined : ((value.edits as Array<any>).map(BTJEdit3734ToJSON)),
    };
}

