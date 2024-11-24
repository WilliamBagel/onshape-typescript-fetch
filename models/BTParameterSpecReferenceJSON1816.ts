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
import type { BTElementLibraryPurpose3353 } from './BTElementLibraryPurpose3353';
import {
    BTElementLibraryPurpose3353FromJSON,
    BTElementLibraryPurpose3353FromJSONTyped,
    BTElementLibraryPurpose3353ToJSON,
} from './BTElementLibraryPurpose3353';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpecReferenceBlob1367 } from './BTParameterSpecReferenceBlob1367';
import {
    BTParameterSpecReferenceBlob1367FromJSON,
    BTParameterSpecReferenceBlob1367FromJSONTyped,
    BTParameterSpecReferenceBlob1367ToJSON,
} from './BTParameterSpecReferenceBlob1367';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

/**
 * 
 * @export
 * @interface BTParameterSpecReferenceJSON1816
 */
export interface BTParameterSpecReferenceJSON1816 extends BTParameterSpecReferenceBlob1367 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTParameterSpecReferenceJSON1816
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTParameterSpecReferenceJSON1816 interface.
 */
export function instanceOfBTParameterSpecReferenceJSON1816(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReferenceJSON1816FromJSON(json: any): BTParameterSpecReferenceJSON1816 {
    return BTParameterSpecReferenceJSON1816FromJSONTyped(json, false);
}

export function BTParameterSpecReferenceJSON1816FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReferenceJSON1816 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterSpecReferenceBlob1367FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTParameterSpecReferenceJSON1816ToJSON(value?: BTParameterSpecReferenceJSON1816 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpecReferenceBlob1367ToJSON(value),
        'btType': value.btType,
    };
}

