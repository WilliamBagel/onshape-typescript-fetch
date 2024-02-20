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
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTMicroversionIdAndConfiguration2338 } from './BTMicroversionIdAndConfiguration2338';
import {
    BTMicroversionIdAndConfiguration2338FromJSON,
    BTMicroversionIdAndConfiguration2338FromJSONTyped,
    BTMicroversionIdAndConfiguration2338ToJSON,
} from './BTMicroversionIdAndConfiguration2338';

import {
     BTFullElementIdAndPartId643FromJSONTyped,
    BTFullElementIdAndPartId643ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTFullElementIdWithDocument1729
 */
export interface BTFullElementIdWithDocument1729 {
    /**
     * 
     * @type {string}
     * @memberof BTFullElementIdWithDocument1729
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTFullElementIdWithDocument1729
     */
    configured?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFullElementIdWithDocument1729
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFullElementIdWithDocument1729
     */
    elementId?: string;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTFullElementIdWithDocument1729
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {BTMicroversionIdAndConfiguration2338}
     * @memberof BTFullElementIdWithDocument1729
     */
    microversionIdAndConfiguration?: BTMicroversionIdAndConfiguration2338;
    /**
     * 
     * @type {BTMicroversionIdAndConfiguration2338}
     * @memberof BTFullElementIdWithDocument1729
     */
    target?: BTMicroversionIdAndConfiguration2338;
}

/**
 * Check if a given object implements the BTFullElementIdWithDocument1729 interface.
 */
export function instanceOfBTFullElementIdWithDocument1729(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFullElementIdWithDocument1729FromJSON(json: any): BTFullElementIdWithDocument1729 {
    return BTFullElementIdWithDocument1729FromJSONTyped(json, false);
}

export function BTFullElementIdWithDocument1729FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFullElementIdWithDocument1729 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTFullElementIdAndPartId-643') {
            return BTFullElementIdAndPartId643FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'configured': !exists(json, 'configured') ? undefined : json['configured'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'microversionIdAndConfiguration': !exists(json, 'microversionIdAndConfiguration') ? undefined : BTMicroversionIdAndConfiguration2338FromJSON(json['microversionIdAndConfiguration']),
        'target': !exists(json, 'target') ? undefined : BTMicroversionIdAndConfiguration2338FromJSON(json['target']),
    };
}

export function BTFullElementIdWithDocument1729SuperToJSON(value?: BTFullElementIdWithDocument1729 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configured': value.configured,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'microversionIdAndConfiguration': BTMicroversionIdAndConfiguration2338ToJSON(value.microversionIdAndConfiguration),
        'target': BTMicroversionIdAndConfiguration2338ToJSON(value.target),
    };
}



export function BTFullElementIdWithDocument1729ToJSON(value?: BTFullElementIdWithDocument1729 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTFullElementIdAndPartId-643') {
        return BTFullElementIdAndPartId643ToJSON(value);
    }
    return BTFullElementIdWithDocument1729SuperToJSON(value);
}
