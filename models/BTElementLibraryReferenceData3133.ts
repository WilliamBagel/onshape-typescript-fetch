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
import type { BTObjectId } from './BTObjectId';
import {
    BTObjectIdFromJSON,
    BTObjectIdFromJSONTyped,
    BTObjectIdToJSON,
} from './BTObjectId';

/**
 * 
 * @export
 * @interface BTElementLibraryReferenceData3133
 */
export interface BTElementLibraryReferenceData3133 {
    /**
     * 
     * @type {string}
     * @memberof BTElementLibraryReferenceData3133
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTElementLibraryReferenceData3133
     */
    elementLibraryId?: string;
    /**
     * 
     * @type {BTObjectId}
     * @memberof BTElementLibraryReferenceData3133
     */
    elementLibraryIdRaw?: BTObjectId;
    /**
     * 
     * @type {Array<BTObjectId>}
     * @memberof BTElementLibraryReferenceData3133
     */
    elementLibrarySelectionPath?: Array<BTObjectId>;
    /**
     * 
     * @type {string}
     * @memberof BTElementLibraryReferenceData3133
     */
    elementLibraryVersion?: string;
    /**
     * 
     * @type {BTObjectId}
     * @memberof BTElementLibraryReferenceData3133
     */
    elementLibraryVersionRaw?: BTObjectId;
}

/**
 * Check if a given object implements the BTElementLibraryReferenceData3133 interface.
 */
export function instanceOfBTElementLibraryReferenceData3133(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTElementLibraryReferenceData3133FromJSON(json: any): BTElementLibraryReferenceData3133 {
    return BTElementLibraryReferenceData3133FromJSONTyped(json, false);
}

export function BTElementLibraryReferenceData3133FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTElementLibraryReferenceData3133 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'elementLibraryId': !exists(json, 'elementLibraryId') ? undefined : json['elementLibraryId'],
        'elementLibraryIdRaw': !exists(json, 'elementLibraryIdRaw') ? undefined : BTObjectIdFromJSON(json['elementLibraryIdRaw']),
        'elementLibrarySelectionPath': !exists(json, 'elementLibrarySelectionPath') ? undefined : ((json['elementLibrarySelectionPath'] as Array<any>).map(BTObjectIdFromJSON)),
        'elementLibraryVersion': !exists(json, 'elementLibraryVersion') ? undefined : json['elementLibraryVersion'],
        'elementLibraryVersionRaw': !exists(json, 'elementLibraryVersionRaw') ? undefined : BTObjectIdFromJSON(json['elementLibraryVersionRaw']),
    };
}

export function BTElementLibraryReferenceData3133ToJSON(value?: BTElementLibraryReferenceData3133 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'elementLibraryId': value.elementLibraryId,
        'elementLibraryIdRaw': BTObjectIdToJSON(value.elementLibraryIdRaw),
        'elementLibrarySelectionPath': value.elementLibrarySelectionPath === undefined ? undefined : ((value.elementLibrarySelectionPath as Array<any>).map(BTObjectIdToJSON)),
        'elementLibraryVersion': value.elementLibraryVersion,
        'elementLibraryVersionRaw': BTObjectIdToJSON(value.elementLibraryVersionRaw),
    };
}

