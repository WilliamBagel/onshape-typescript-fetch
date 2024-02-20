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
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTFeatureOccurrenceData775 } from './BTFeatureOccurrenceData775';
import {
    BTFeatureOccurrenceData775FromJSON,
    BTFeatureOccurrenceData775FromJSONTyped,
    BTFeatureOccurrenceData775ToJSON,
} from './BTFeatureOccurrenceData775';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';

/**
 * 
 * @export
 * @interface BTOccurrenceData75
 */
export interface BTOccurrenceData75 {
    /**
     * 
     * @type {string}
     * @memberof BTOccurrenceData75
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: BTFeatureOccurrenceData775; }}
     * @memberof BTOccurrenceData75
     */
    featureData?: { [key: string]: BTFeatureOccurrenceData775; };
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceData75
     */
    forceHighestQualityTessellation?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceData75
     */
    hidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceData75
     */
    isFixed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceData75
     */
    isHidden?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTOccurrenceData75
     */
    nodeId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTOccurrenceData75
     */
    occurrence?: BTOccurrence74;
    /**
     * 
     * @type {BTBSMatrix386}
     * @memberof BTOccurrenceData75
     */
    transform?: BTBSMatrix386;
}

/**
 * Check if a given object implements the BTOccurrenceData75 interface.
 */
export function instanceOfBTOccurrenceData75(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOccurrenceData75FromJSON(json: any): BTOccurrenceData75 {
    return BTOccurrenceData75FromJSONTyped(json, false);
}

export function BTOccurrenceData75FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOccurrenceData75 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureData': !exists(json, 'featureData') ? undefined : (mapValues(json['featureData'], BTFeatureOccurrenceData775FromJSON)),
        'forceHighestQualityTessellation': !exists(json, 'forceHighestQualityTessellation') ? undefined : json['forceHighestQualityTessellation'],
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'isFixed': !exists(json, 'isFixed') ? undefined : json['isFixed'],
        'isHidden': !exists(json, 'isHidden') ? undefined : json['isHidden'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'occurrence': !exists(json, 'occurrence') ? undefined : BTOccurrence74FromJSON(json['occurrence']),
        'transform': !exists(json, 'transform') ? undefined : BTBSMatrix386FromJSON(json['transform']),
    };
}

export function BTOccurrenceData75ToJSON(value?: BTOccurrenceData75 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'featureData': value.featureData === undefined ? undefined : (mapValues(value.featureData, BTFeatureOccurrenceData775ToJSON)),
        'forceHighestQualityTessellation': value.forceHighestQualityTessellation,
        'hidden': value.hidden,
        'isFixed': value.isFixed,
        'isHidden': value.isHidden,
        'nodeId': value.nodeId,
        'occurrence': BTOccurrence74ToJSON(value.occurrence),
        'transform': BTBSMatrix386ToJSON(value.transform),
    };
}

