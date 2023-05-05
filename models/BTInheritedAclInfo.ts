/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15457-d8ebaa9b9e42
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAclEntryInfo } from './BTAclEntryInfo';
import {
    BTAclEntryInfoFromJSON,
    BTAclEntryInfoFromJSONTyped,
    BTAclEntryInfoToJSON,
} from './BTAclEntryInfo';
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';

/**
 * 
 * @export
 * @interface BTInheritedAclInfo
 */
export interface BTInheritedAclInfo {
    /**
     * 
     * @type {Array<BTAclEntryInfo>}
     * @memberof BTInheritedAclInfo
     */
    entries?: Array<BTAclEntryInfo>;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTInheritedAclInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTInheritedAclInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTInheritedAclInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInheritedAclInfo
     */
    objectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInheritedAclInfo
     */
    objectName?: string;
    /**
     * 
     * @type {number}
     * @memberof BTInheritedAclInfo
     */
    objectType?: number;
    /**
     * 
     * @type {BTOwnerInfo}
     * @memberof BTInheritedAclInfo
     */
    owner?: BTOwnerInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTInheritedAclInfo
     */
    _public?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTInheritedAclInfo
     */
    sharedWithSupport?: boolean;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTInheritedAclInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInheritedAclInfo
     */
    visibility?: string;
}

/**
 * Check if a given object implements the BTInheritedAclInfo interface.
 */
export function instanceOfBTInheritedAclInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTInheritedAclInfoFromJSON(json: any): BTInheritedAclInfo {
    return BTInheritedAclInfoFromJSONTyped(json, false);
}

export function BTInheritedAclInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTInheritedAclInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(BTAclEntryInfoFromJSON)),
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'objectName': !exists(json, 'objectName') ? undefined : json['objectName'],
        'objectType': !exists(json, 'objectType') ? undefined : json['objectType'],
        'owner': !exists(json, 'owner') ? undefined : BTOwnerInfoFromJSON(json['owner']),
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'sharedWithSupport': !exists(json, 'sharedWithSupport') ? undefined : json['sharedWithSupport'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
    };
}

export function BTInheritedAclInfoToJSON(value?: BTInheritedAclInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(BTAclEntryInfoToJSON)),
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'objectId': value.objectId,
        'objectName': value.objectName,
        'objectType': value.objectType,
        'owner': BTOwnerInfoToJSON(value.owner),
        'public': value._public,
        'sharedWithSupport': value.sharedWithSupport,
        'viewRef': value.viewRef,
        'visibility': value.visibility,
    };
}

