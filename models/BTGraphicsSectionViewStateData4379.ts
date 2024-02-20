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
import type { BTGraphicsSectionPlaneData1429 } from './BTGraphicsSectionPlaneData1429';
import {
    BTGraphicsSectionPlaneData1429FromJSON,
    BTGraphicsSectionPlaneData1429FromJSONTyped,
    BTGraphicsSectionPlaneData1429ToJSON,
} from './BTGraphicsSectionPlaneData1429';
import type { BTUiSelection1185 } from './BTUiSelection1185';
import {
    BTUiSelection1185FromJSON,
    BTUiSelection1185FromJSONTyped,
    BTUiSelection1185ToJSON,
} from './BTUiSelection1185';

/**
 * 
 * @export
 * @interface BTGraphicsSectionViewStateData4379
 */
export interface BTGraphicsSectionViewStateData4379 {
    /**
     * 
     * @type {string}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    elementId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    isExcluding?: boolean;
    /**
     * 
     * @type {Array<BTGraphicsSectionPlaneData1429>}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    sectionPlanes?: Array<BTGraphicsSectionPlaneData1429>;
    /**
     * 
     * @type {Array<BTUiSelection1185>}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    selectionsToExclude?: Array<BTUiSelection1185>;
    /**
     * 
     * @type {Array<BTUiSelection1185>}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    selectionsToInclude?: Array<BTUiSelection1185>;
}

/**
 * Check if a given object implements the BTGraphicsSectionViewStateData4379 interface.
 */
export function instanceOfBTGraphicsSectionViewStateData4379(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGraphicsSectionViewStateData4379FromJSON(json: any): BTGraphicsSectionViewStateData4379 {
    return BTGraphicsSectionViewStateData4379FromJSONTyped(json, false);
}

export function BTGraphicsSectionViewStateData4379FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGraphicsSectionViewStateData4379 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'isExcluding': !exists(json, 'isExcluding') ? undefined : json['isExcluding'],
        'sectionPlanes': !exists(json, 'sectionPlanes') ? undefined : ((json['sectionPlanes'] as Array<any>).map(BTGraphicsSectionPlaneData1429FromJSON)),
        'selectionsToExclude': !exists(json, 'selectionsToExclude') ? undefined : ((json['selectionsToExclude'] as Array<any>).map(BTUiSelection1185FromJSON)),
        'selectionsToInclude': !exists(json, 'selectionsToInclude') ? undefined : ((json['selectionsToInclude'] as Array<any>).map(BTUiSelection1185FromJSON)),
    };
}

export function BTGraphicsSectionViewStateData4379ToJSON(value?: BTGraphicsSectionViewStateData4379 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'elementId': value.elementId,
        'isExcluding': value.isExcluding,
        'sectionPlanes': value.sectionPlanes === undefined ? undefined : ((value.sectionPlanes as Array<any>).map(BTGraphicsSectionPlaneData1429ToJSON)),
        'selectionsToExclude': value.selectionsToExclude === undefined ? undefined : ((value.selectionsToExclude as Array<any>).map(BTUiSelection1185ToJSON)),
        'selectionsToInclude': value.selectionsToInclude === undefined ? undefined : ((value.selectionsToInclude as Array<any>).map(BTUiSelection1185ToJSON)),
    };
}

