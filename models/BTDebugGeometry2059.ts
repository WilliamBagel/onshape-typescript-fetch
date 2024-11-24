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
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';
import type { BTGraphicsAppearance1152 } from './BTGraphicsAppearance1152';
import {
    BTGraphicsAppearance1152FromJSON,
    BTGraphicsAppearance1152FromJSONTyped,
    BTGraphicsAppearance1152ToJSON,
} from './BTGraphicsAppearance1152';
import type { BTTessellatedGeometry2576 } from './BTTessellatedGeometry2576';
import {
    BTTessellatedGeometry2576FromJSON,
    BTTessellatedGeometry2576FromJSONTyped,
    BTTessellatedGeometry2576ToJSON,
} from './BTTessellatedGeometry2576';
import type { GBTDebugEntityColor } from './GBTDebugEntityColor';
import {
    GBTDebugEntityColorFromJSON,
    GBTDebugEntityColorFromJSONTyped,
    GBTDebugEntityColorToJSON,
} from './GBTDebugEntityColor';
import type { GBTDebugEntityStyle } from './GBTDebugEntityStyle';
import {
    GBTDebugEntityStyleFromJSON,
    GBTDebugEntityStyleFromJSONTyped,
    GBTDebugEntityStyleToJSON,
} from './GBTDebugEntityStyle';

/**
 * 
 * @export
 * @interface BTDebugGeometry2059
 */
export interface BTDebugGeometry2059 extends BTEntityGeometry35 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTDebugGeometry2059
     */
    btType?: string;
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTDebugGeometry2059
     */
    appearance?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {boolean}
     * @memberof BTDebugGeometry2059
     */
    belongsToFlattenedSheetMetalBody?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDebugGeometry2059
     */
    bodyId?: string;
    /**
     * 
     * @type {GBTDebugEntityColor}
     * @memberof BTDebugGeometry2059
     */
    color?: GBTDebugEntityColor;
    /**
     * 
     * @type {string}
     * @memberof BTDebugGeometry2059
     */
    deterministicId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDebugGeometry2059
     */
    sheetMetalModelId?: string;
    /**
     * 
     * @type {GBTDebugEntityStyle}
     * @memberof BTDebugGeometry2059
     */
    style?: GBTDebugEntityStyle;
    /**
     * 
     * @type {BTTessellatedGeometry2576}
     * @memberof BTDebugGeometry2059
     */
    tessellation?: BTTessellatedGeometry2576;
}

/**
 * Check if a given object implements the BTDebugGeometry2059 interface.
 */
export function instanceOfBTDebugGeometry2059(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDebugGeometry2059FromJSON(json: any): BTDebugGeometry2059 {
    return BTDebugGeometry2059FromJSONTyped(json, false);
}

export function BTDebugGeometry2059FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDebugGeometry2059 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTEntityGeometry35FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'appearance': !exists(json, 'appearance') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearance']),
        'belongsToFlattenedSheetMetalBody': !exists(json, 'belongsToFlattenedSheetMetalBody') ? undefined : json['belongsToFlattenedSheetMetalBody'],
        'bodyId': !exists(json, 'bodyId') ? undefined : json['bodyId'],
        'color': !exists(json, 'color') ? undefined : GBTDebugEntityColorFromJSON(json['color']),
        'deterministicId': !exists(json, 'deterministicId') ? undefined : json['deterministicId'],
        'sheetMetalModelId': !exists(json, 'sheetMetalModelId') ? undefined : json['sheetMetalModelId'],
        'style': !exists(json, 'style') ? undefined : GBTDebugEntityStyleFromJSON(json['style']),
        'tessellation': !exists(json, 'tessellation') ? undefined : BTTessellatedGeometry2576FromJSON(json['tessellation']),
    };
}

export function BTDebugGeometry2059ToJSON(value?: BTDebugGeometry2059 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTEntityGeometry35ToJSON(value),
        'btType': value.btType,
        'appearance': BTGraphicsAppearance1152ToJSON(value.appearance),
        'belongsToFlattenedSheetMetalBody': value.belongsToFlattenedSheetMetalBody,
        'bodyId': value.bodyId,
        'color': GBTDebugEntityColorToJSON(value.color),
        'deterministicId': value.deterministicId,
        'sheetMetalModelId': value.sheetMetalModelId,
        'style': GBTDebugEntityStyleToJSON(value.style),
        'tessellation': BTTessellatedGeometry2576ToJSON(value.tessellation),
    };
}

