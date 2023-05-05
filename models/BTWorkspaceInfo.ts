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
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';
import type { BTVersionInfo } from './BTVersionInfo';
import {
    BTVersionInfoFromJSON,
    BTVersionInfoFromJSONTyped,
    BTVersionInfoToJSON,
} from './BTVersionInfo';

/**
 * 
 * @export
 * @interface BTWorkspaceInfo
 */
export interface BTWorkspaceInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkspaceInfo
     */
    canDelete?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTWorkspaceInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTWorkspaceInfo
     */
    creator?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTWorkspaceInfo
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkspaceInfo
     */
    documentId?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTWorkspaceInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTWorkspaceInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkspaceInfo
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTWorkspaceInfo
     */
    lastModifier?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTWorkspaceInfo
     */
    microversion?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTWorkspaceInfo
     */
    modifiedAt?: Date;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTWorkspaceInfo
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTWorkspaceInfo
     */
    overrideDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTWorkspaceInfo
     */
    parent?: string;
    /**
     * 
     * @type {Array<BTVersionInfo>}
     * @memberof BTWorkspaceInfo
     */
    parents?: Array<BTVersionInfo>;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTWorkspaceInfo
     */
    thumbnail?: BTThumbnailInfo;
    /**
     * 
     * @type {string}
     * @memberof BTWorkspaceInfo
     */
    type?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTWorkspaceInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTWorkspaceInfo interface.
 */
export function instanceOfBTWorkspaceInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkspaceInfoFromJSON(json: any): BTWorkspaceInfo {
    return BTWorkspaceInfoFromJSONTyped(json, false);
}

export function BTWorkspaceInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkspaceInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'canDelete': !exists(json, 'canDelete') ? undefined : json['canDelete'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'creator': !exists(json, 'creator') ? undefined : BTUserBasicSummaryInfoFromJSON(json['creator']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isReadOnly': !exists(json, 'isReadOnly') ? undefined : json['isReadOnly'],
        'lastModifier': !exists(json, 'lastModifier') ? undefined : BTUserBasicSummaryInfoFromJSON(json['lastModifier']),
        'microversion': !exists(json, 'microversion') ? undefined : json['microversion'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'overrideDate': !exists(json, 'overrideDate') ? undefined : (new Date(json['overrideDate'])),
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'parents': !exists(json, 'parents') ? undefined : ((json['parents'] as Array<any>).map(BTVersionInfoFromJSON)),
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTThumbnailInfoFromJSON(json['thumbnail']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTWorkspaceInfoToJSON(value?: BTWorkspaceInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'canDelete': value.canDelete,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'creator': BTUserBasicSummaryInfoToJSON(value.creator),
        'description': value.description,
        'documentId': value.documentId,
        'href': value.href,
        'id': value.id,
        'isReadOnly': value.isReadOnly,
        'lastModifier': BTUserBasicSummaryInfoToJSON(value.lastModifier),
        'microversion': value.microversion,
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'name': value.name,
        'overrideDate': value.overrideDate === undefined ? undefined : (value.overrideDate.toISOString()),
        'parent': value.parent,
        'parents': value.parents === undefined ? undefined : ((value.parents as Array<any>).map(BTVersionInfoToJSON)),
        'thumbnail': BTThumbnailInfoToJSON(value.thumbnail),
        'type': value.type,
        'viewRef': value.viewRef,
    };
}

