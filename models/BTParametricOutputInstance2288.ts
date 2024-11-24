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
import type { BTInstanceBase2263 } from './BTInstanceBase2263';
import {
    BTInstanceBase2263FromJSON,
    BTInstanceBase2263FromJSONTyped,
    BTInstanceBase2263ToJSON,
} from './BTInstanceBase2263';
import type { BTMSuppressionState1924 } from './BTMSuppressionState1924';
import {
    BTMSuppressionState1924FromJSON,
    BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
} from './BTMSuppressionState1924';
import type { BTReferenceCustomData1551 } from './BTReferenceCustomData1551';
import {
    BTReferenceCustomData1551FromJSON,
    BTReferenceCustomData1551FromJSONTyped,
    BTReferenceCustomData1551ToJSON,
} from './BTReferenceCustomData1551';
import type { BTRevisionCustomData2090 } from './BTRevisionCustomData2090';
import {
    BTRevisionCustomData2090FromJSON,
    BTRevisionCustomData2090FromJSONTyped,
    BTRevisionCustomData2090ToJSON,
} from './BTRevisionCustomData2090';

import {
     BTClonedInstance2505FromJSONTyped,
     BTParametricPartStudioChildInstance3696FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTParametricOutputInstance2288
 */
export interface BTParametricOutputInstance2288 extends BTInstanceBase2263 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTParametricOutputInstance2288
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTParametricOutputInstance2288 interface.
 */
export function instanceOfBTParametricOutputInstance2288(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParametricOutputInstance2288FromJSON(json: any): BTParametricOutputInstance2288 {
    return BTParametricOutputInstance2288FromJSONTyped(json, false);
}

export function BTParametricOutputInstance2288FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParametricOutputInstance2288 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTClonedInstance-2505') {
            return BTClonedInstance2505FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParametricPartStudioChildInstance-3696') {
            return BTParametricPartStudioChildInstance3696FromJSONTyped(json, true);
        }
    }
    return {
        ...BTInstanceBase2263FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTParametricOutputInstance2288ToJSON(value?: BTParametricOutputInstance2288 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTInstanceBase2263ToJSON(value),
        'btType': value.btType,
    };
}

