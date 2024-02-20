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
import type { BTMSuppressionState1924 } from './BTMSuppressionState1924';
import {
    BTMSuppressionState1924FromJSON,
    BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
} from './BTMSuppressionState1924';
import type { BTPSOIdentity2741 } from './BTPSOIdentity2741';
import {
    BTPSOIdentity2741FromJSON,
    BTPSOIdentity2741FromJSONTyped,
    BTPSOIdentity2741ToJSON,
} from './BTPSOIdentity2741';
import type { BTParametricOutputInstance2288 } from './BTParametricOutputInstance2288';
import {
    BTParametricOutputInstance2288FromJSON,
    BTParametricOutputInstance2288FromJSONTyped,
    BTParametricOutputInstance2288ToJSON,
 BTParametricOutputInstance2288SuperToJSON,
} from './BTParametricOutputInstance2288';
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
import type { GBTPartStudioInstanceType } from './GBTPartStudioInstanceType';
import {
    GBTPartStudioInstanceTypeFromJSON,
    GBTPartStudioInstanceTypeFromJSONTyped,
    GBTPartStudioInstanceTypeToJSON,
} from './GBTPartStudioInstanceType';

/**
 * 
 * @export
 * @interface BTParametricPartStudioChildInstance3696
 */
export interface BTParametricPartStudioChildInstance3696 extends BTParametricOutputInstance2288 {
    /**
     * 
     * @type {string}
     * @memberof BTParametricPartStudioChildInstance3696
     */
    btType?: string;
    /**
     * 
     * @type {BTPSOIdentity2741}
     * @memberof BTParametricPartStudioChildInstance3696
     */
    partIdentity?: BTPSOIdentity2741;
    /**
     * 
     * @type {string}
     * @memberof BTParametricPartStudioChildInstance3696
     */
    sketchFeatureId?: string;
    /**
     * 
     * @type {GBTPartStudioInstanceType}
     * @memberof BTParametricPartStudioChildInstance3696
     */
    type?: GBTPartStudioInstanceType;
}

/**
 * Check if a given object implements the BTParametricPartStudioChildInstance3696 interface.
 */
export function instanceOfBTParametricPartStudioChildInstance3696(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParametricPartStudioChildInstance3696FromJSON(json: any): BTParametricPartStudioChildInstance3696 {
    return BTParametricPartStudioChildInstance3696FromJSONTyped(json, false);
}

export function BTParametricPartStudioChildInstance3696FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParametricPartStudioChildInstance3696 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParametricOutputInstance2288FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'partIdentity': !exists(json, 'partIdentity') ? undefined : BTPSOIdentity2741FromJSON(json['partIdentity']),
        'sketchFeatureId': !exists(json, 'sketchFeatureId') ? undefined : json['sketchFeatureId'],
        'type': !exists(json, 'type') ? undefined : GBTPartStudioInstanceTypeFromJSON(json['type']),
    };
}

export function BTParametricPartStudioChildInstance3696ToJSON(value?: BTParametricPartStudioChildInstance3696 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParametricOutputInstance2288SuperToJSON(value),
        'btType': value.btType,
        'partIdentity': BTPSOIdentity2741ToJSON(value.partIdentity),
        'sketchFeatureId': value.sketchFeatureId,
        'type': GBTPartStudioInstanceTypeToJSON(value.type),
    };
}

