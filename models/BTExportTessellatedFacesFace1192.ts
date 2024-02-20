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
import type { BTExportTessellatedFacesFacet1417 } from './BTExportTessellatedFacesFacet1417';
import {
    BTExportTessellatedFacesFacet1417FromJSON,
    BTExportTessellatedFacesFacet1417FromJSONTyped,
    BTExportTessellatedFacesFacet1417ToJSON,
} from './BTExportTessellatedFacesFacet1417';
import type { BTGraphicsAppearance1152 } from './BTGraphicsAppearance1152';
import {
    BTGraphicsAppearance1152FromJSON,
    BTGraphicsAppearance1152FromJSONTyped,
    BTGraphicsAppearance1152ToJSON,
} from './BTGraphicsAppearance1152';

/**
 * 
 * @export
 * @interface BTExportTessellatedFacesFace1192
 */
export interface BTExportTessellatedFacesFace1192 {
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTExportTessellatedFacesFace1192
     */
    appearance?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesFace1192
     */
    appearanceSourceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesFace1192
     */
    appearanceSourceName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesFace1192
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesFace1192
     */
    errorMessage?: string;
    /**
     * 
     * @type {Array<BTExportTessellatedFacesFacet1417>}
     * @memberof BTExportTessellatedFacesFace1192
     */
    facets?: Array<BTExportTessellatedFacesFacet1417>;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesFace1192
     */
    id?: string;
}

/**
 * Check if a given object implements the BTExportTessellatedFacesFace1192 interface.
 */
export function instanceOfBTExportTessellatedFacesFace1192(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportTessellatedFacesFace1192FromJSON(json: any): BTExportTessellatedFacesFace1192 {
    return BTExportTessellatedFacesFace1192FromJSONTyped(json, false);
}

export function BTExportTessellatedFacesFace1192FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportTessellatedFacesFace1192 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearance': !exists(json, 'appearance') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearance']),
        'appearanceSourceId': !exists(json, 'appearanceSourceId') ? undefined : json['appearanceSourceId'],
        'appearanceSourceName': !exists(json, 'appearanceSourceName') ? undefined : json['appearanceSourceName'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'facets': !exists(json, 'facets') ? undefined : ((json['facets'] as Array<any>).map(BTExportTessellatedFacesFacet1417FromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function BTExportTessellatedFacesFace1192ToJSON(value?: BTExportTessellatedFacesFace1192 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearance': BTGraphicsAppearance1152ToJSON(value.appearance),
        'appearanceSourceId': value.appearanceSourceId,
        'appearanceSourceName': value.appearanceSourceName,
        'btType': value.btType,
        'errorMessage': value.errorMessage,
        'facets': value.facets === undefined ? undefined : ((value.facets as Array<any>).map(BTExportTessellatedFacesFacet1417ToJSON)),
        'id': value.id,
    };
}

