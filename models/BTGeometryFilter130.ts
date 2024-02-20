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
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
 BTQueryFilter183SuperToJSON,
} from './BTQueryFilter183';
import type { GBTGeometryType } from './GBTGeometryType';
import {
    GBTGeometryTypeFromJSON,
    GBTGeometryTypeFromJSONTyped,
    GBTGeometryTypeToJSON,
} from './GBTGeometryType';

/**
 * 
 * @export
 * @interface BTGeometryFilter130
 */
export interface BTGeometryFilter130 extends BTQueryFilter183 {
    /**
     * 
     * @type {string}
     * @memberof BTGeometryFilter130
     */
    btType?: string;
    /**
     * 
     * @type {GBTGeometryType}
     * @memberof BTGeometryFilter130
     */
    geometryType?: GBTGeometryType;
}

/**
 * Check if a given object implements the BTGeometryFilter130 interface.
 */
export function instanceOfBTGeometryFilter130(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGeometryFilter130FromJSON(json: any): BTGeometryFilter130 {
    return BTGeometryFilter130FromJSONTyped(json, false);
}

export function BTGeometryFilter130FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGeometryFilter130 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTQueryFilter183FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'geometryType': !exists(json, 'geometryType') ? undefined : GBTGeometryTypeFromJSON(json['geometryType']),
    };
}

export function BTGeometryFilter130ToJSON(value?: BTGeometryFilter130 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTQueryFilter183SuperToJSON(value),
        'btType': value.btType,
        'geometryType': GBTGeometryTypeToJSON(value.geometryType),
    };
}

