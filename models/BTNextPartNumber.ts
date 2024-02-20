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
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';

/**
 * 
 * @export
 * @interface BTNextPartNumber
 */
export interface BTNextPartNumber {
    /**
     * 
     * @type {Array<Category>}
     * @memberof BTNextPartNumber
     */
    categories?: Array<Category>;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    elementId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTNextPartNumber
     */
    elementType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    mimeType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    prefix?: string;
    /**
     * 
     * @type {number}
     * @memberof BTNextPartNumber
     */
    resourceType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumber
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTNextPartNumber interface.
 */
export function instanceOfBTNextPartNumber(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTNextPartNumberFromJSON(json: any): BTNextPartNumber {
    return BTNextPartNumberFromJSONTyped(json, false);
}

export function BTNextPartNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTNextPartNumber {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categories': !exists(json, 'categories') ? undefined : ((json['categories'] as Array<any>).map(CategoryFromJSON)),
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementType': !exists(json, 'elementType') ? undefined : json['elementType'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'mimeType': !exists(json, 'mimeType') ? undefined : json['mimeType'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'resourceType': !exists(json, 'resourceType') ? undefined : json['resourceType'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTNextPartNumberToJSON(value?: BTNextPartNumber | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categories': value.categories === undefined ? undefined : ((value.categories as Array<any>).map(CategoryToJSON)),
        'configuration': value._configuration,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementType': value.elementType,
        'errorMessage': value.errorMessage,
        'id': value.id,
        'mimeType': value.mimeType,
        'partId': value.partId,
        'partNumber': value.partNumber,
        'prefix': value.prefix,
        'resourceType': value.resourceType,
        'versionId': value.versionId,
        'workspaceId': value.workspaceId,
    };
}

