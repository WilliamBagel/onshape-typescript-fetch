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
import type { BTLegacySearchHit } from './BTLegacySearchHit';
import {
    BTLegacySearchHitFromJSON,
    BTLegacySearchHitFromJSONTyped,
    BTLegacySearchHitToJSON,
} from './BTLegacySearchHit';
import type { BTSearchEntityType } from './BTSearchEntityType';
import {
    BTSearchEntityTypeFromJSON,
    BTSearchEntityTypeFromJSONTyped,
    BTSearchEntityTypeToJSON,
} from './BTSearchEntityType';

/**
 * 
 * @export
 * @interface BTDocumentSearchHitInfo
 */
export interface BTDocumentSearchHitInfo {
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    elementName?: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BTDocumentSearchHitInfo
     */
    highlightedFields?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {BTLegacySearchHit}
     * @memberof BTDocumentSearchHitInfo
     */
    hit?: BTLegacySearchHit;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    hitId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    projectId?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BTDocumentSearchHitInfo
     */
    sourceMap?: { [key: string]: object; };
    /**
     * 
     * @type {BTSearchEntityType}
     * @memberof BTDocumentSearchHitInfo
     */
    type?: BTSearchEntityType;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    versionOrWorkspaceName?: string;
}

/**
 * Check if a given object implements the BTDocumentSearchHitInfo interface.
 */
export function instanceOfBTDocumentSearchHitInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentSearchHitInfoFromJSON(json: any): BTDocumentSearchHitInfo {
    return BTDocumentSearchHitInfoFromJSONTyped(json, false);
}

export function BTDocumentSearchHitInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentSearchHitInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementName': !exists(json, 'elementName') ? undefined : json['elementName'],
        'highlightedFields': !exists(json, 'highlightedFields') ? undefined : json['highlightedFields'],
        'hit': !exists(json, 'hit') ? undefined : BTLegacySearchHitFromJSON(json['hit']),
        'hitId': !exists(json, 'hitId') ? undefined : json['hitId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'sourceMap': !exists(json, 'sourceMap') ? undefined : json['sourceMap'],
        'type': !exists(json, 'type') ? undefined : BTSearchEntityTypeFromJSON(json['type']),
        'versionOrWorkspaceName': !exists(json, 'versionOrWorkspaceName') ? undefined : json['versionOrWorkspaceName'],
    };
}

export function BTDocumentSearchHitInfoToJSON(value?: BTDocumentSearchHitInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'elementName': value.elementName,
        'highlightedFields': value.highlightedFields,
        'hit': BTLegacySearchHitToJSON(value.hit),
        'hitId': value.hitId,
        'name': value.name,
        'projectId': value.projectId,
        'sourceMap': value.sourceMap,
        'type': BTSearchEntityTypeToJSON(value.type),
        'versionOrWorkspaceName': value.versionOrWorkspaceName,
    };
}

