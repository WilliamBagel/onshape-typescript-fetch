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
 * @interface BTLinearDimensionDisplayData330AllOf
 */
export interface BTLinearDimensionDisplayData330AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTLinearDimensionDisplayData330AllOf
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330AllOf
     */
    positionX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330AllOf
     */
    positionY?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330AllOf
     */
    witnessEndPoint0X?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330AllOf
     */
    witnessEndPoint0Y?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330AllOf
     */
    witnessEndPoint1X?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330AllOf
     */
    witnessEndPoint1Y?: number;
}

/**
 * Check if a given object implements the BTLinearDimensionDisplayData330AllOf interface.
 */
export function instanceOfBTLinearDimensionDisplayData330AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTLinearDimensionDisplayData330AllOfFromJSON(json: any): BTLinearDimensionDisplayData330AllOf {
    return BTLinearDimensionDisplayData330AllOfFromJSONTyped(json, false);
}

export function BTLinearDimensionDisplayData330AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTLinearDimensionDisplayData330AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'positionX': !exists(json, 'positionX') ? undefined : json['positionX'],
        'positionY': !exists(json, 'positionY') ? undefined : json['positionY'],
        'witnessEndPoint0X': !exists(json, 'witnessEndPoint0X') ? undefined : json['witnessEndPoint0X'],
        'witnessEndPoint0Y': !exists(json, 'witnessEndPoint0Y') ? undefined : json['witnessEndPoint0Y'],
        'witnessEndPoint1X': !exists(json, 'witnessEndPoint1X') ? undefined : json['witnessEndPoint1X'],
        'witnessEndPoint1Y': !exists(json, 'witnessEndPoint1Y') ? undefined : json['witnessEndPoint1Y'],
    };
}

export function BTLinearDimensionDisplayData330AllOfToJSON(value?: BTLinearDimensionDisplayData330AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'positionX': value.positionX,
        'positionY': value.positionY,
        'witnessEndPoint0X': value.witnessEndPoint0X,
        'witnessEndPoint0Y': value.witnessEndPoint0Y,
        'witnessEndPoint1X': value.witnessEndPoint1X,
        'witnessEndPoint1Y': value.witnessEndPoint1Y,
    };
}

