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
/**
 * 
 * @export
 * @interface BTCurveGeometryLine117AllOf
 */
export interface BTCurveGeometryLine117AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTCurveGeometryLine117AllOf
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryLine117AllOf
     */
    dirX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryLine117AllOf
     */
    dirY?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryLine117AllOf
     */
    pntX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryLine117AllOf
     */
    pntY?: number;
}

/**
 * Check if a given object implements the BTCurveGeometryLine117AllOf interface.
 */
export function instanceOfBTCurveGeometryLine117AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCurveGeometryLine117AllOfFromJSON(json: any): BTCurveGeometryLine117AllOf {
    return BTCurveGeometryLine117AllOfFromJSONTyped(json, false);
}

export function BTCurveGeometryLine117AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCurveGeometryLine117AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'dirX': !exists(json, 'dirX') ? undefined : json['dirX'],
        'dirY': !exists(json, 'dirY') ? undefined : json['dirY'],
        'pntX': !exists(json, 'pntX') ? undefined : json['pntX'],
        'pntY': !exists(json, 'pntY') ? undefined : json['pntY'],
    };
}

export function BTCurveGeometryLine117AllOfToJSON(value?: BTCurveGeometryLine117AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'dirX': value.dirX,
        'dirY': value.dirY,
        'pntX': value.pntX,
        'pntY': value.pntY,
    };
}

