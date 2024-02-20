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
import type { BTMIndividualQuery138 } from './BTMIndividualQuery138';
import {
    BTMIndividualQuery138FromJSON,
    BTMIndividualQuery138FromJSONTyped,
    BTMIndividualQuery138ToJSON,
 BTMIndividualQuery138SuperToJSON,
} from './BTMIndividualQuery138';
import type { BTMIndividualQueryBase139 } from './BTMIndividualQueryBase139';
import {
    BTMIndividualQueryBase139FromJSON,
    BTMIndividualQueryBase139FromJSONTyped,
    BTMIndividualQueryBase139ToJSON,
} from './BTMIndividualQueryBase139';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';

/**
 * 
 * @export
 * @interface BTMIndividualSketchRegionQuery140
 */
export interface BTMIndividualSketchRegionQuery140 extends BTMIndividualQuery138 {
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualSketchRegionQuery140
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualSketchRegionQuery140
     */
    featureId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMIndividualSketchRegionQuery140
     */
    filterInnerLoops?: boolean;
}

/**
 * Check if a given object implements the BTMIndividualSketchRegionQuery140 interface.
 */
export function instanceOfBTMIndividualSketchRegionQuery140(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMIndividualSketchRegionQuery140FromJSON(json: any): BTMIndividualSketchRegionQuery140 {
    return BTMIndividualSketchRegionQuery140FromJSONTyped(json, false);
}

export function BTMIndividualSketchRegionQuery140FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMIndividualSketchRegionQuery140 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMIndividualQuery138FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'filterInnerLoops': !exists(json, 'filterInnerLoops') ? undefined : json['filterInnerLoops'],
    };
}

export function BTMIndividualSketchRegionQuery140ToJSON(value?: BTMIndividualSketchRegionQuery140 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMIndividualQuery138SuperToJSON(value),
        'btType': value.btType,
        'featureId': value.featureId,
        'filterInnerLoops': value.filterInnerLoops,
    };
}

