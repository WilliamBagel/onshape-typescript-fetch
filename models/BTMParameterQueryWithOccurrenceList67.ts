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
import type { BTMIndividualQueryWithOccurrenceBase904 } from './BTMIndividualQueryWithOccurrenceBase904';
import {
    BTMIndividualQueryWithOccurrenceBase904FromJSON,
    BTMIndividualQueryWithOccurrenceBase904FromJSONTyped,
    BTMIndividualQueryWithOccurrenceBase904ToJSON,
} from './BTMIndividualQueryWithOccurrenceBase904';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';

/**
 * 
 * @export
 * @interface BTMParameterQueryWithOccurrenceList67
 */
export interface BTMParameterQueryWithOccurrenceList67 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQueryWithOccurrenceList67
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQueryWithOccurrenceList67
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQueryWithOccurrenceList67
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMParameterQueryWithOccurrenceList67
     */
    occurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterQueryWithOccurrenceList67
     */
    parameterId?: string;
    /**
     * 
     * @type {Array<BTMIndividualQueryWithOccurrenceBase904>}
     * @memberof BTMParameterQueryWithOccurrenceList67
     */
    queries?: Array<BTMIndividualQueryWithOccurrenceBase904>;
}

/**
 * Check if a given object implements the BTMParameterQueryWithOccurrenceList67 interface.
 */
export function instanceOfBTMParameterQueryWithOccurrenceList67(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterQueryWithOccurrenceList67FromJSON(json: any): BTMParameterQueryWithOccurrenceList67 {
    return BTMParameterQueryWithOccurrenceList67FromJSONTyped(json, false);
}

export function BTMParameterQueryWithOccurrenceList67FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterQueryWithOccurrenceList67 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'occurrences': !exists(json, 'occurrences') ? undefined : ((json['occurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
        'queries': !exists(json, 'queries') ? undefined : ((json['queries'] as Array<any>).map(BTMIndividualQueryWithOccurrenceBase904FromJSON)),
    };
}

export function BTMParameterQueryWithOccurrenceList67ToJSON(value?: BTMParameterQueryWithOccurrenceList67 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'importMicroversion': value.importMicroversion,
        'nodeId': value.nodeId,
        'occurrences': value.occurrences === undefined ? undefined : ((value.occurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'parameterId': value.parameterId,
        'queries': value.queries === undefined ? undefined : ((value.queries as Array<any>).map(BTMIndividualQueryWithOccurrenceBase904ToJSON)),
    };
}

