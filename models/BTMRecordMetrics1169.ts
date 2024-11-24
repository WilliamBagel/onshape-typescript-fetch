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
import type { BTMIndividualQuery138 } from './BTMIndividualQuery138';
import {
    BTMIndividualQuery138FromJSON,
    BTMIndividualQuery138FromJSONTyped,
    BTMIndividualQuery138ToJSON,
} from './BTMIndividualQuery138';
import type { BTMNode19 } from './BTMNode19';
import {
    BTMNode19FromJSON,
    BTMNode19FromJSONTyped,
    BTMNode19ToJSON,
} from './BTMNode19';

/**
 * 
 * @export
 * @interface BTMRecordMetrics1169
 */
export interface BTMRecordMetrics1169 extends BTMNode19 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTMRecordMetrics1169
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMRecordMetrics1169
     */
    doBodyValidation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMRecordMetrics1169
     */
    previousFeatureId?: string;
    /**
     * 
     * @type {Array<BTMIndividualQuery138>}
     * @memberof BTMRecordMetrics1169
     */
    references?: Array<BTMIndividualQuery138>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMRecordMetrics1169
     */
    useLatestBehavior?: boolean;
}

/**
 * Check if a given object implements the BTMRecordMetrics1169 interface.
 */
export function instanceOfBTMRecordMetrics1169(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMRecordMetrics1169FromJSON(json: any): BTMRecordMetrics1169 {
    return BTMRecordMetrics1169FromJSONTyped(json, false);
}

export function BTMRecordMetrics1169FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMRecordMetrics1169 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMNode19FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'doBodyValidation': !exists(json, 'doBodyValidation') ? undefined : json['doBodyValidation'],
        'previousFeatureId': !exists(json, 'previousFeatureId') ? undefined : json['previousFeatureId'],
        'references': !exists(json, 'references') ? undefined : ((json['references'] as Array<any>).map(BTMIndividualQuery138FromJSON)),
        'useLatestBehavior': !exists(json, 'useLatestBehavior') ? undefined : json['useLatestBehavior'],
    };
}

export function BTMRecordMetrics1169ToJSON(value?: BTMRecordMetrics1169 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMNode19ToJSON(value),
        'btType': value.btType,
        'doBodyValidation': value.doBodyValidation,
        'previousFeatureId': value.previousFeatureId,
        'references': value.references === undefined ? undefined : ((value.references as Array<any>).map(BTMIndividualQuery138ToJSON)),
        'useLatestBehavior': value.useLatestBehavior,
    };
}

