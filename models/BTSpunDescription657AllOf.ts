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
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTSpunDescription657AllOf
 */
export interface BTSpunDescription657AllOf {
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTSpunDescription657AllOf
     */
    axis?: BTVector3d389;
    /**
     * 
     * @type {string}
     * @memberof BTSpunDescription657AllOf
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTSpunDescription657AllOf interface.
 */
export function instanceOfBTSpunDescription657AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSpunDescription657AllOfFromJSON(json: any): BTSpunDescription657AllOf {
    return BTSpunDescription657AllOfFromJSONTyped(json, false);
}

export function BTSpunDescription657AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSpunDescription657AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'axis': !exists(json, 'axis') ? undefined : BTVector3d389FromJSON(json['axis']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTSpunDescription657AllOfToJSON(value?: BTSpunDescription657AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'axis': BTVector3d389ToJSON(value.axis),
        'btType': value.btType,
    };
}

