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
import type { BTSketchEntityDisplayData354 } from './BTSketchEntityDisplayData354';
import {
    BTSketchEntityDisplayData354FromJSON,
    BTSketchEntityDisplayData354FromJSONTyped,
    BTSketchEntityDisplayData354ToJSON,
} from './BTSketchEntityDisplayData354';

import {
     BTSketchImageDisplayData1379FromJSONTyped,
     BTSketchTextDisplayData1707FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTSketchCompositeEntityDisplayData1093
 */
export interface BTSketchCompositeEntityDisplayData1093 extends BTSketchEntityDisplayData354 {
    /**
     * Type of JSON object.
     * @type {string}
     * @memberof BTSketchCompositeEntityDisplayData1093
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTSketchCompositeEntityDisplayData1093 interface.
 */
export function instanceOfBTSketchCompositeEntityDisplayData1093(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchCompositeEntityDisplayData1093FromJSON(json: any): BTSketchCompositeEntityDisplayData1093 {
    return BTSketchCompositeEntityDisplayData1093FromJSONTyped(json, false);
}

export function BTSketchCompositeEntityDisplayData1093FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchCompositeEntityDisplayData1093 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTSketchImageDisplayData-1379') {
            return BTSketchImageDisplayData1379FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchTextDisplayData-1707') {
            return BTSketchTextDisplayData1707FromJSONTyped(json, true);
        }
    }
    return {
        ...BTSketchEntityDisplayData354FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTSketchCompositeEntityDisplayData1093ToJSON(value?: BTSketchCompositeEntityDisplayData1093 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTSketchEntityDisplayData354ToJSON(value),
        'btType': value.btType,
    };
}

