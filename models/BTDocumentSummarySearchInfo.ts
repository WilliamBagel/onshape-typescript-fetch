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
import type { BTBaseInfo } from './BTBaseInfo';
import {
    BTBaseInfoFromJSON,
    BTBaseInfoFromJSONTyped,
    BTBaseInfoToJSON,
} from './BTBaseInfo';
import type { BTDocumentLabelInfo } from './BTDocumentLabelInfo';
import {
    BTDocumentLabelInfoFromJSON,
    BTDocumentLabelInfoFromJSONTyped,
    BTDocumentLabelInfoToJSON,
} from './BTDocumentLabelInfo';
import type { BTDocumentSearchHitInfo } from './BTDocumentSearchHitInfo';
import {
    BTDocumentSearchHitInfoFromJSON,
    BTDocumentSearchHitInfoFromJSONTyped,
    BTDocumentSearchHitInfoToJSON,
} from './BTDocumentSearchHitInfo';
import type { BTDocumentSummaryInfo } from './BTDocumentSummaryInfo';
import {
    BTDocumentSummaryInfoFromJSON,
    BTDocumentSummaryInfoFromJSONTyped,
    BTDocumentSummaryInfoToJSON,
} from './BTDocumentSummaryInfo';
import type { BTOldPermission } from './BTOldPermission';
import {
    BTOldPermissionFromJSON,
    BTOldPermissionFromJSONTyped,
    BTOldPermissionToJSON,
} from './BTOldPermission';
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';
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
import type { BTVersionGraphMode } from './BTVersionGraphMode';
import {
    BTVersionGraphModeFromJSON,
    BTVersionGraphModeFromJSONTyped,
    BTVersionGraphModeToJSON,
} from './BTVersionGraphMode';
import type { BTWorkspaceInfo } from './BTWorkspaceInfo';
import {
    BTWorkspaceInfoFromJSON,
    BTWorkspaceInfoFromJSONTyped,
    BTWorkspaceInfoToJSON,
} from './BTWorkspaceInfo';

/**
 * 
 * @export
 * @interface BTDocumentSummarySearchInfo
 */
export interface BTDocumentSummarySearchInfo extends BTDocumentSummaryInfo {
    /**
     * 
     * @type {Array<BTDocumentSearchHitInfo>}
     * @memberof BTDocumentSummarySearchInfo
     */
    searchHits?: Array<BTDocumentSearchHitInfo>;
}

/**
 * Check if a given object implements the BTDocumentSummarySearchInfo interface.
 */
export function instanceOfBTDocumentSummarySearchInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentSummarySearchInfoFromJSON(json: any): BTDocumentSummarySearchInfo {
    return BTDocumentSummarySearchInfoFromJSONTyped(json, false);
}

export function BTDocumentSummarySearchInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentSummarySearchInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTDocumentSummaryInfoFromJSONTyped(json, ignoreDiscriminator),
        'searchHits': !exists(json, 'searchHits') ? undefined : ((json['searchHits'] as Array<any>).map(BTDocumentSearchHitInfoFromJSON)),
    };
}

export function BTDocumentSummarySearchInfoToJSON(value?: BTDocumentSummarySearchInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTDocumentSummaryInfoToJSON(value),
        'searchHits': value.searchHits === undefined ? undefined : ((value.searchHits as Array<any>).map(BTDocumentSearchHitInfoToJSON)),
    };
}

