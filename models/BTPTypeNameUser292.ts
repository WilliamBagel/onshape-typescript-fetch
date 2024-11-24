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
import type { BTPName261 } from './BTPName261';
import {
    BTPName261FromJSON,
    BTPName261FromJSONTyped,
    BTPName261ToJSON,
} from './BTPName261';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { BTPTypeName290 } from './BTPTypeName290';
import {
    BTPTypeName290FromJSON,
    BTPTypeName290FromJSONTyped,
    BTPTypeName290ToJSON,
} from './BTPTypeName290';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPTypeNameUser292
 */
export interface BTPTypeNameUser292 extends BTPTypeName290 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTPTypeNameUser292
     */
    btType?: string;
    /**
     * 
     * @type {BTPName261}
     * @memberof BTPTypeNameUser292
     */
    type?: BTPName261;
}

/**
 * Check if a given object implements the BTPTypeNameUser292 interface.
 */
export function instanceOfBTPTypeNameUser292(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTypeNameUser292FromJSON(json: any): BTPTypeNameUser292 {
    return BTPTypeNameUser292FromJSONTyped(json, false);
}

export function BTPTypeNameUser292FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTypeNameUser292 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPTypeName290FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'type': !exists(json, 'type') ? undefined : BTPName261FromJSON(json['type']),
    };
}

export function BTPTypeNameUser292ToJSON(value?: BTPTypeNameUser292 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPTypeName290ToJSON(value),
        'btType': value.btType,
        'type': BTPName261ToJSON(value.type),
    };
}

