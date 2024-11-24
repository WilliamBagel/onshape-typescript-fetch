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
import type { BTApplicationTargetInfo } from './BTApplicationTargetInfo';
import {
    BTApplicationTargetInfoFromJSON,
    BTApplicationTargetInfoFromJSONTyped,
    BTApplicationTargetInfoToJSON,
} from './BTApplicationTargetInfo';
import type { GBTElementType } from './GBTElementType';
import {
    GBTElementTypeFromJSON,
    GBTElementTypeFromJSONTyped,
    GBTElementTypeToJSON,
} from './GBTElementType';

import {
     BlobItemFromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * 
     * @type {BTApplicationTargetInfo}
     * @memberof Item
     */
    applicationTarget?: BTApplicationTargetInfo;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    elementId?: string;
    /**
     * 
     * @type {GBTElementType}
     * @memberof Item
     */
    elementType?: GBTElementType;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    encodedConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    jsonType: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    partName?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    revisionId?: string;
    /**
     * 
     * @type {number}
     * @memberof Item
     */
    state?: number;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    versionName?: string;
}

/**
 * Check if a given object implements the Item interface.
 */
export function instanceOfItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jsonType" in value;

    return isInstance;
}

export function ItemFromJSON(json: any): Item {
    return ItemFromJSONTyped(json, false);
}

export function ItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): Item {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['jsonType'] === 'publication-blob-item') {
            return BlobItemFromJSONTyped(json, true);
        }
    }
    return {
        
        'applicationTarget': !exists(json, 'applicationTarget') ? undefined : BTApplicationTargetInfoFromJSON(json['applicationTarget']),
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementType': !exists(json, 'elementType') ? undefined : GBTElementTypeFromJSON(json['elementType']),
        'encodedConfiguration': !exists(json, 'encodedConfiguration') ? undefined : json['encodedConfiguration'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'jsonType': json['jsonType'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partName': !exists(json, 'partName') ? undefined : json['partName'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'revisionId': !exists(json, 'revisionId') ? undefined : json['revisionId'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'versionName': !exists(json, 'versionName') ? undefined : json['versionName'],
    };
}

export function ItemToJSON(value?: Item | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationTarget': BTApplicationTargetInfoToJSON(value.applicationTarget),
        'dataType': value.dataType,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementType': GBTElementTypeToJSON(value.elementType),
        'encodedConfiguration': value.encodedConfiguration,
        'id': value.id,
        'jsonType': value.jsonType,
        'partId': value.partId,
        'partName': value.partName,
        'partNumber': value.partNumber,
        'revision': value.revision,
        'revisionId': value.revisionId,
        'state': value.state,
        'versionId': value.versionId,
        'versionName': value.versionName,
    };
}

