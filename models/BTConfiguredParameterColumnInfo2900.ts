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
import type { BTConfiguredValuesColumnInfo1025 } from './BTConfiguredValuesColumnInfo1025';
import {
    BTConfiguredValuesColumnInfo1025FromJSON,
    BTConfiguredValuesColumnInfo1025FromJSONTyped,
    BTConfiguredValuesColumnInfo1025ToJSON,
 BTConfiguredValuesColumnInfo1025SuperToJSON,
} from './BTConfiguredValuesColumnInfo1025';
import type { BTInnerParameterLocation1715 } from './BTInnerParameterLocation1715';
import {
    BTInnerParameterLocation1715FromJSON,
    BTInnerParameterLocation1715FromJSONTyped,
    BTInnerParameterLocation1715ToJSON,
} from './BTInnerParameterLocation1715';
import type { BTTableColumnSpec1967 } from './BTTableColumnSpec1967';
import {
    BTTableColumnSpec1967FromJSON,
    BTTableColumnSpec1967FromJSONTyped,
    BTTableColumnSpec1967ToJSON,
} from './BTTableColumnSpec1967';
import type { GBTConfiguredParentType } from './GBTConfiguredParentType';
import {
    GBTConfiguredParentTypeFromJSON,
    GBTConfiguredParentTypeFromJSONTyped,
    GBTConfiguredParentTypeToJSON,
} from './GBTConfiguredParentType';

/**
 * 
 * @export
 * @interface BTConfiguredParameterColumnInfo2900
 */
export interface BTConfiguredParameterColumnInfo2900 extends BTConfiguredValuesColumnInfo1025 {
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredParameterColumnInfo2900
     */
    btType?: string;
    /**
     * 
     * @type {BTInnerParameterLocation1715}
     * @memberof BTConfiguredParameterColumnInfo2900
     */
    innerParameterLocation?: BTInnerParameterLocation1715;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredParameterColumnInfo2900
     */
    parameterId?: string;
}

/**
 * Check if a given object implements the BTConfiguredParameterColumnInfo2900 interface.
 */
export function instanceOfBTConfiguredParameterColumnInfo2900(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConfiguredParameterColumnInfo2900FromJSON(json: any): BTConfiguredParameterColumnInfo2900 {
    return BTConfiguredParameterColumnInfo2900FromJSONTyped(json, false);
}

export function BTConfiguredParameterColumnInfo2900FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConfiguredParameterColumnInfo2900 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTConfiguredValuesColumnInfo1025FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'innerParameterLocation': !exists(json, 'innerParameterLocation') ? undefined : BTInnerParameterLocation1715FromJSON(json['innerParameterLocation']),
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
    };
}

export function BTConfiguredParameterColumnInfo2900ToJSON(value?: BTConfiguredParameterColumnInfo2900 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTConfiguredValuesColumnInfo1025SuperToJSON(value),
        'btType': value.btType,
        'innerParameterLocation': BTInnerParameterLocation1715ToJSON(value.innerParameterLocation),
        'parameterId': value.parameterId,
    };
}

