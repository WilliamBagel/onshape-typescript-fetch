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
import {
     BTDebugGeometry2059FromJSONTyped,
    BTDebugGeometry2059ToJSON,
     BTTessellatedGeometry2576FromJSONTyped,
    BTTessellatedGeometry2576ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTEntityGeometry35
 */
export interface BTEntityGeometry35 {
    /**
     * 
     * @type {string}
     * @memberof BTEntityGeometry35
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityGeometry35
     */
    compressed?: boolean;
    /**
     * 
     * @type {BTEntityGeometry35}
     * @memberof BTEntityGeometry35
     */
    decompressed?: BTEntityGeometry35;
    /**
     * 
     * @type {number}
     * @memberof BTEntityGeometry35
     */
    errorCode?: number;
    /**
     * 
     * @type {number}
     * @memberof BTEntityGeometry35
     */
    estimatedMemoryUsageInBytes?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityGeometry35
     */
    face?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTEntityGeometry35
     */
    hasTessellationError?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTEntityGeometry35
     */
    settingIndex?: number;
}

/**
 * Check if a given object implements the BTEntityGeometry35 interface.
 */
export function instanceOfBTEntityGeometry35(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTEntityGeometry35FromJSON(json: any): BTEntityGeometry35 {
    return BTEntityGeometry35FromJSONTyped(json, false);
}

export function BTEntityGeometry35FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTEntityGeometry35 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTDebugGeometry-2059') {
            return BTDebugGeometry2059FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTTessellatedGeometry-2576') {
            return BTTessellatedGeometry2576FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'compressed': !exists(json, 'compressed') ? undefined : json['compressed'],
        'decompressed': !exists(json, 'decompressed') ? undefined : BTEntityGeometry35FromJSON(json['decompressed']),
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'estimatedMemoryUsageInBytes': !exists(json, 'estimatedMemoryUsageInBytes') ? undefined : json['estimatedMemoryUsageInBytes'],
        'face': !exists(json, 'face') ? undefined : json['face'],
        'hasTessellationError': !exists(json, 'hasTessellationError') ? undefined : json['hasTessellationError'],
        'settingIndex': !exists(json, 'settingIndex') ? undefined : json['settingIndex'],
    };
}

export function BTEntityGeometry35SuperToJSON(value?: BTEntityGeometry35 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'compressed': value.compressed,
        'decompressed': BTEntityGeometry35ToJSON(value.decompressed),
        'errorCode': value.errorCode,
        'estimatedMemoryUsageInBytes': value.estimatedMemoryUsageInBytes,
        'face': value.face,
        'hasTessellationError': value.hasTessellationError,
        'settingIndex': value.settingIndex,
    };
}



export function BTEntityGeometry35ToJSON(value?: BTEntityGeometry35 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTDebugGeometry-2059') {
        return BTDebugGeometry2059ToJSON(value);
    }
    if (value.btType === 'BTTessellatedGeometry-2576') {
        return BTTessellatedGeometry2576ToJSON(value);
    }
    return BTEntityGeometry35SuperToJSON(value);
}
