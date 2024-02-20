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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
 BTParameterSpec6SuperToJSON,
} from './BTParameterSpec6';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

/**
 * 
 * @export
 * @interface BTParameterSpecEnum171
 */
export interface BTParameterSpecEnum171 extends BTParameterSpec6 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecEnum171
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecEnum171
     */
    enumName?: string;
    /**
     * 
     * @type {{ [key: string]: BTParameterVisibilityCondition177; }}
     * @memberof BTParameterSpecEnum171
     */
    enumValueToVisibilityCondition?: { [key: string]: BTParameterVisibilityCondition177; };
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecEnum171
     */
    namespace?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpecEnum171
     */
    optionIconUris?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpecEnum171
     */
    optionNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpecEnum171
     */
    options?: Array<string>;
}

/**
 * Check if a given object implements the BTParameterSpecEnum171 interface.
 */
export function instanceOfBTParameterSpecEnum171(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecEnum171FromJSON(json: any): BTParameterSpecEnum171 {
    return BTParameterSpecEnum171FromJSONTyped(json, false);
}

export function BTParameterSpecEnum171FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecEnum171 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterSpec6FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'enumName': !exists(json, 'enumName') ? undefined : json['enumName'],
        'enumValueToVisibilityCondition': !exists(json, 'enumValueToVisibilityCondition') ? undefined : (mapValues(json['enumValueToVisibilityCondition'], BTParameterVisibilityCondition177FromJSON)),
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'optionIconUris': !exists(json, 'optionIconUris') ? undefined : json['optionIconUris'],
        'optionNames': !exists(json, 'optionNames') ? undefined : json['optionNames'],
        'options': !exists(json, 'options') ? undefined : json['options'],
    };
}

export function BTParameterSpecEnum171ToJSON(value?: BTParameterSpecEnum171 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpec6SuperToJSON(value),
        'btType': value.btType,
        'enumName': value.enumName,
        'enumValueToVisibilityCondition': value.enumValueToVisibilityCondition === undefined ? undefined : (mapValues(value.enumValueToVisibilityCondition, BTParameterVisibilityCondition177ToJSON)),
        'namespace': value.namespace,
        'optionIconUris': value.optionIconUris,
        'optionNames': value.optionNames,
        'options': value.options,
    };
}

