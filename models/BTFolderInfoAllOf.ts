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
import type { BTElementLibrarySummaryInfo } from './BTElementLibrarySummaryInfo';
import {
    BTElementLibrarySummaryInfoFromJSON,
    BTElementLibrarySummaryInfoFromJSONTyped,
    BTElementLibrarySummaryInfoToJSON,
} from './BTElementLibrarySummaryInfo';

/**
 * 
 * @export
 * @interface BTFolderInfoAllOf
 */
export interface BTFolderInfoAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof BTFolderInfoAllOf
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTFolderInfoAllOf
     */
    canUnshare?: boolean;
    /**
     * 
     * @type {Array<BTElementLibrarySummaryInfo>}
     * @memberof BTFolderInfoAllOf
     */
    elementLibrarySummaryInfo?: Array<BTElementLibrarySummaryInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof BTFolderInfoAllOf
     */
    isOrphaned?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFolderInfoAllOf
     */
    parentId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTFolderInfoAllOf
     */
    permissionSet?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTFolderInfoAllOf
     */
    trash?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTFolderInfoAllOf
     */
    trashedAt?: Date;
}

/**
 * Check if a given object implements the BTFolderInfoAllOf interface.
 */
export function instanceOfBTFolderInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFolderInfoAllOfFromJSON(json: any): BTFolderInfoAllOf {
    return BTFolderInfoAllOfFromJSONTyped(json, false);
}

export function BTFolderInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFolderInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'canUnshare': !exists(json, 'canUnshare') ? undefined : json['canUnshare'],
        'elementLibrarySummaryInfo': !exists(json, 'elementLibrarySummaryInfo') ? undefined : ((json['elementLibrarySummaryInfo'] as Array<any>).map(BTElementLibrarySummaryInfoFromJSON)),
        'isOrphaned': !exists(json, 'isOrphaned') ? undefined : json['isOrphaned'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'permissionSet': !exists(json, 'permissionSet') ? undefined : json['permissionSet'],
        'trash': !exists(json, 'trash') ? undefined : json['trash'],
        'trashedAt': !exists(json, 'trashedAt') ? undefined : (new Date(json['trashedAt'])),
    };
}

export function BTFolderInfoAllOfToJSON(value?: BTFolderInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'canUnshare': value.canUnshare,
        'elementLibrarySummaryInfo': value.elementLibrarySummaryInfo === undefined ? undefined : ((value.elementLibrarySummaryInfo as Array<any>).map(BTElementLibrarySummaryInfoToJSON)),
        'isOrphaned': value.isOrphaned,
        'parentId': value.parentId,
        'permissionSet': value.permissionSet,
        'trash': value.trash,
        'trashedAt': value.trashedAt === undefined ? undefined : (value.trashedAt.toISOString()),
    };
}

