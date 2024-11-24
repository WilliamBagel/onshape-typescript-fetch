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
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';
import type { BTTeamSummaryInfo } from './BTTeamSummaryInfo';
import {
    BTTeamSummaryInfoFromJSON,
    BTTeamSummaryInfoFromJSONTyped,
    BTTeamSummaryInfoToJSON,
} from './BTTeamSummaryInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';

/**
 * 
 * @export
 * @interface BTTeamInfo
 */
export interface BTTeamInfo extends BTTeamSummaryInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTTeamInfo
     */
    admin?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTeamInfo
     */
    member?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTTeamInfo
     */
    size?: number;
}

/**
 * Check if a given object implements the BTTeamInfo interface.
 */
export function instanceOfBTTeamInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTeamInfoFromJSON(json: any): BTTeamInfo {
    return BTTeamInfoFromJSONTyped(json, false);
}

export function BTTeamInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTeamInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTeamSummaryInfoFromJSONTyped(json, ignoreDiscriminator),
        'admin': !exists(json, 'admin') ? undefined : json['admin'],
        'member': !exists(json, 'member') ? undefined : json['member'],
        'size': !exists(json, 'size') ? undefined : json['size'],
    };
}

export function BTTeamInfoToJSON(value?: BTTeamInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTeamSummaryInfoToJSON(value),
        'admin': value.admin,
        'member': value.member,
        'size': value.size,
    };
}

