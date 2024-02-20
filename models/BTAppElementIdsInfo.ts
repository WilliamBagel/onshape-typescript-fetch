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
import type { BTAppElementErrorCode } from './BTAppElementErrorCode';
import {
    BTAppElementErrorCodeFromJSON,
    BTAppElementErrorCodeFromJSONTyped,
    BTAppElementErrorCodeToJSON,
} from './BTAppElementErrorCode';

/**
 * 
 * @export
 * @interface BTAppElementIdsInfo
 */
export interface BTAppElementIdsInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAppElementIdsInfo
     */
    changeId?: string;
    /**
     * The numeric code identifying the error that occurred, if one occurred.
     * @type {number}
     * @memberof BTAppElementIdsInfo
     */
    errorCode?: number;
    /**
     * A human-readable value for the error that occurred, if one occurred.
     * @type {string}
     * @memberof BTAppElementIdsInfo
     */
    errorDescription?: string;
    /**
     * 
     * @type {BTAppElementErrorCode}
     * @memberof BTAppElementIdsInfo
     */
    errorValue?: BTAppElementErrorCode;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTAppElementIdsInfo
     */
    subelementIds?: Array<string>;
}

/**
 * Check if a given object implements the BTAppElementIdsInfo interface.
 */
export function instanceOfBTAppElementIdsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppElementIdsInfoFromJSON(json: any): BTAppElementIdsInfo {
    return BTAppElementIdsInfoFromJSONTyped(json, false);
}

export function BTAppElementIdsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementIdsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeId': !exists(json, 'changeId') ? undefined : json['changeId'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'errorValue': !exists(json, 'errorValue') ? undefined : BTAppElementErrorCodeFromJSON(json['errorValue']),
        'subelementIds': !exists(json, 'subelementIds') ? undefined : json['subelementIds'],
    };
}

export function BTAppElementIdsInfoToJSON(value?: BTAppElementIdsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeId': value.changeId,
        'errorCode': value.errorCode,
        'errorDescription': value.errorDescription,
        'errorValue': BTAppElementErrorCodeToJSON(value.errorValue),
        'subelementIds': value.subelementIds,
    };
}

