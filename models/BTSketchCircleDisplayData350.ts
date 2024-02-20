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
import type { BTSketchEntityDisplayData354 } from './BTSketchEntityDisplayData354';
import {
    BTSketchEntityDisplayData354FromJSON,
    BTSketchEntityDisplayData354FromJSONTyped,
    BTSketchEntityDisplayData354ToJSON,
 BTSketchEntityDisplayData354SuperToJSON,
} from './BTSketchEntityDisplayData354';

/**
 * 
 * @export
 * @interface BTSketchCircleDisplayData350
 */
export interface BTSketchCircleDisplayData350 extends BTSketchEntityDisplayData354 {
    /**
     * 
     * @type {string}
     * @memberof BTSketchCircleDisplayData350
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTSketchCircleDisplayData350
     */
    radius?: number;
}

/**
 * Check if a given object implements the BTSketchCircleDisplayData350 interface.
 */
export function instanceOfBTSketchCircleDisplayData350(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchCircleDisplayData350FromJSON(json: any): BTSketchCircleDisplayData350 {
    return BTSketchCircleDisplayData350FromJSONTyped(json, false);
}

export function BTSketchCircleDisplayData350FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchCircleDisplayData350 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTSketchEntityDisplayData354FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
    };
}

export function BTSketchCircleDisplayData350ToJSON(value?: BTSketchCircleDisplayData350 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTSketchEntityDisplayData354SuperToJSON(value),
        'btType': value.btType,
        'radius': value.radius,
    };
}

