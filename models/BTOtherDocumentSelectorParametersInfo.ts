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
import type { BTDocumentSelectorParametersInfo } from './BTDocumentSelectorParametersInfo';
import {
    BTDocumentSelectorParametersInfoFromJSON,
    BTDocumentSelectorParametersInfoFromJSONTyped,
    BTDocumentSelectorParametersInfoToJSON,
} from './BTDocumentSelectorParametersInfo';
import type { BTFolderStateInfo } from './BTFolderStateInfo';
import {
    BTFolderStateInfoFromJSON,
    BTFolderStateInfoFromJSONTyped,
    BTFolderStateInfoToJSON,
} from './BTFolderStateInfo';

/**
 * 
 * @export
 * @interface BTOtherDocumentSelectorParametersInfo
 */
export interface BTOtherDocumentSelectorParametersInfo extends BTDocumentSelectorParametersInfo {
    /**
     * 
     * @type {Array<BTFolderStateInfo>}
     * @memberof BTOtherDocumentSelectorParametersInfo
     */
    folderStatePath?: Array<BTFolderStateInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTOtherDocumentSelectorParametersInfo
     */
    selectedDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTOtherDocumentSelectorParametersInfo
     */
    selectedVersionId?: string;
}

/**
 * Check if a given object implements the BTOtherDocumentSelectorParametersInfo interface.
 */
export function instanceOfBTOtherDocumentSelectorParametersInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOtherDocumentSelectorParametersInfoFromJSON(json: any): BTOtherDocumentSelectorParametersInfo {
    return BTOtherDocumentSelectorParametersInfoFromJSONTyped(json, false);
}

export function BTOtherDocumentSelectorParametersInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOtherDocumentSelectorParametersInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTDocumentSelectorParametersInfoFromJSONTyped(json, ignoreDiscriminator),
        'folderStatePath': !exists(json, 'folderStatePath') ? undefined : ((json['folderStatePath'] as Array<any>).map(BTFolderStateInfoFromJSON)),
        'selectedDocumentId': !exists(json, 'selectedDocumentId') ? undefined : json['selectedDocumentId'],
        'selectedVersionId': !exists(json, 'selectedVersionId') ? undefined : json['selectedVersionId'],
    };
}

export function BTOtherDocumentSelectorParametersInfoToJSON(value?: BTOtherDocumentSelectorParametersInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTDocumentSelectorParametersInfoToJSON(value),
        'folderStatePath': value.folderStatePath === undefined ? undefined : ((value.folderStatePath as Array<any>).map(BTFolderStateInfoToJSON)),
        'selectedDocumentId': value.selectedDocumentId,
        'selectedVersionId': value.selectedVersionId,
    };
}

