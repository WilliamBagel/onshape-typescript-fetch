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
import type { BTCompanySummaryInfo } from './BTCompanySummaryInfo';
import {
    BTCompanySummaryInfoFromJSON,
    BTCompanySummaryInfoFromJSONTyped,
    BTCompanySummaryInfoToJSON,
} from './BTCompanySummaryInfo';
import type { BTUserDetailSummaryInfo } from './BTUserDetailSummaryInfo';
import {
    BTUserDetailSummaryInfoFromJSON,
    BTUserDetailSummaryInfoFromJSONTyped,
    BTUserDetailSummaryInfoToJSON,
} from './BTUserDetailSummaryInfo';
import type { GlobalPermissionInfo } from './GlobalPermissionInfo';
import {
    GlobalPermissionInfoFromJSON,
    GlobalPermissionInfoFromJSONTyped,
    GlobalPermissionInfoToJSON,
} from './GlobalPermissionInfo';

import {
     BTUserAdminSummaryInfoFromJSONTyped,
     BTUserOAuth2SummaryInfoFromJSONTyped,
     BTCompanyUserSummaryInfoFromJSONTyped,
     BTUserSummaryInfoFromJSONTyped,
     BTUserInfoFromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTUserSummaryInfo
 */
export interface BTUserSummaryInfo extends BTUserDetailSummaryInfo {
    /**
     * 
     * @type {BTCompanySummaryInfo}
     * @memberof BTUserSummaryInfo
     */
    company?: BTCompanySummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserSummaryInfo
     */
    documentationNameOverride?: string;
    /**
     * 
     * @type {GlobalPermissionInfo}
     * @memberof BTUserSummaryInfo
     */
    globalPermissions?: GlobalPermissionInfo;
    /**
     * 
     * @type {number}
     * @memberof BTUserSummaryInfo
     */
    invitationState?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserSummaryInfo
     */
    isGuest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserSummaryInfo
     */
    isLight?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTUserSummaryInfo
     */
    lastLoginTime?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserSummaryInfo
     */
    personalMessageAllowed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTUserSummaryInfo
     */
    source?: number;
}

/**
 * Check if a given object implements the BTUserSummaryInfo interface.
 */
export function instanceOfBTUserSummaryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserSummaryInfoFromJSON(json: any): BTUserSummaryInfo {
    return BTUserSummaryInfoFromJSONTyped(json, false);
}

export function BTUserSummaryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserSummaryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['jsonType'] === 'BTUserAdminSummaryInfo') {
            return BTUserAdminSummaryInfoFromJSONTyped(json, true);
        }
        if (json['jsonType'] === 'BTUserOAuth2SummaryInfo') {
            return BTUserOAuth2SummaryInfoFromJSONTyped(json, true);
        }
        if (json['jsonType'] === 'companyuser') {
            return BTCompanyUserSummaryInfoFromJSONTyped(json, true);
        }
        if (json['jsonType'] === 'user-summary') {
            return BTUserSummaryInfoFromJSONTyped(json, true);
        }
        if (json['jsonType'] === 'userinfo') {
            return BTUserInfoFromJSONTyped(json, true);
        }
    }
    return {
        ...BTUserDetailSummaryInfoFromJSONTyped(json, ignoreDiscriminator),
        'company': !exists(json, 'company') ? undefined : BTCompanySummaryInfoFromJSON(json['company']),
        'documentationNameOverride': !exists(json, 'documentationNameOverride') ? undefined : json['documentationNameOverride'],
        'globalPermissions': !exists(json, 'globalPermissions') ? undefined : GlobalPermissionInfoFromJSON(json['globalPermissions']),
        'invitationState': !exists(json, 'invitationState') ? undefined : json['invitationState'],
        'isGuest': !exists(json, 'isGuest') ? undefined : json['isGuest'],
        'isLight': !exists(json, 'isLight') ? undefined : json['isLight'],
        'lastLoginTime': !exists(json, 'lastLoginTime') ? undefined : (new Date(json['lastLoginTime'])),
        'personalMessageAllowed': !exists(json, 'personalMessageAllowed') ? undefined : json['personalMessageAllowed'],
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function BTUserSummaryInfoToJSON(value?: BTUserSummaryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTUserDetailSummaryInfoToJSON(value),
        'company': BTCompanySummaryInfoToJSON(value.company),
        'documentationNameOverride': value.documentationNameOverride,
        'globalPermissions': GlobalPermissionInfoToJSON(value.globalPermissions),
        'invitationState': value.invitationState,
        'isGuest': value.isGuest,
        'isLight': value.isLight,
        'lastLoginTime': value.lastLoginTime === undefined ? undefined : (value.lastLoginTime.toISOString()),
        'personalMessageAllowed': value.personalMessageAllowed,
        'source': value.source,
    };
}

