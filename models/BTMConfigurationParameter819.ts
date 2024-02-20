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
import type { BTTreeNode20 } from './BTTreeNode20';
import {
    BTTreeNode20FromJSON,
    BTTreeNode20FromJSONTyped,
    BTTreeNode20ToJSON,
} from './BTTreeNode20';
import type { GBTConfigurationParameterType } from './GBTConfigurationParameterType';
import {
    GBTConfigurationParameterTypeFromJSON,
    GBTConfigurationParameterTypeFromJSONTyped,
    GBTConfigurationParameterTypeToJSON,
} from './GBTConfigurationParameterType';

import {
     BTMConfigurationParameterBoolean2550FromJSONTyped,
    BTMConfigurationParameterBoolean2550ToJSON,
     BTMConfigurationParameterEnum105FromJSONTyped,
    BTMConfigurationParameterEnum105ToJSON,
     BTMConfigurationParameterQuantity1826FromJSONTyped,
    BTMConfigurationParameterQuantity1826ToJSON,
     BTMConfigurationParameterString872FromJSONTyped,
    BTMConfigurationParameterString872ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMConfigurationParameter819
 */
export interface BTMConfigurationParameter819 {
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameter819
     */
    btType?: string;
    /**
     * 
     * @type {BTTreeNode20}
     * @memberof BTMConfigurationParameter819
     */
    generatedParameterId?: BTTreeNode20;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameter819
     */
    importMicroversion?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMConfigurationParameter819
     */
    isCosmetic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameter819
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameter819
     */
    parameterId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameter819
     */
    parameterName?: string;
    /**
     * 
     * @type {GBTConfigurationParameterType}
     * @memberof BTMConfigurationParameter819
     */
    parameterType?: GBTConfigurationParameterType;
    /**
     * 
     * @type {boolean}
     * @memberof BTMConfigurationParameter819
     */
    valid?: boolean;
}

/**
 * Check if a given object implements the BTMConfigurationParameter819 interface.
 */
export function instanceOfBTMConfigurationParameter819(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationParameter819FromJSON(json: any): BTMConfigurationParameter819 {
    return BTMConfigurationParameter819FromJSONTyped(json, false);
}

export function BTMConfigurationParameter819FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationParameter819 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMConfigurationParameterBoolean-2550') {
            return BTMConfigurationParameterBoolean2550FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMConfigurationParameterEnum-105') {
            return BTMConfigurationParameterEnum105FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMConfigurationParameterQuantity-1826') {
            return BTMConfigurationParameterQuantity1826FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMConfigurationParameterString-872') {
            return BTMConfigurationParameterString872FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'generatedParameterId': !exists(json, 'generatedParameterId') ? undefined : BTTreeNode20FromJSON(json['generatedParameterId']),
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'isCosmetic': !exists(json, 'isCosmetic') ? undefined : json['isCosmetic'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
        'parameterName': !exists(json, 'parameterName') ? undefined : json['parameterName'],
        'parameterType': !exists(json, 'parameterType') ? undefined : GBTConfigurationParameterTypeFromJSON(json['parameterType']),
        'valid': !exists(json, 'valid') ? undefined : json['valid'],
    };
}

export function BTMConfigurationParameter819SuperToJSON(value?: BTMConfigurationParameter819 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'generatedParameterId': BTTreeNode20ToJSON(value.generatedParameterId),
        'importMicroversion': value.importMicroversion,
        'isCosmetic': value.isCosmetic,
        'nodeId': value.nodeId,
        'parameterId': value.parameterId,
        'parameterName': value.parameterName,
        'parameterType': GBTConfigurationParameterTypeToJSON(value.parameterType),
        'valid': value.valid,
    };
}



export function BTMConfigurationParameter819ToJSON(value?: BTMConfigurationParameter819 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTMConfigurationParameterBoolean-2550') {
        return BTMConfigurationParameterBoolean2550ToJSON(value);
    }
    if (value.btType === 'BTMConfigurationParameterEnum-105') {
        return BTMConfigurationParameterEnum105ToJSON(value);
    }
    if (value.btType === 'BTMConfigurationParameterQuantity-1826') {
        return BTMConfigurationParameterQuantity1826ToJSON(value);
    }
    if (value.btType === 'BTMConfigurationParameterString-872') {
        return BTMConfigurationParameterString872ToJSON(value);
    }
    return BTMConfigurationParameter819SuperToJSON(value);
}
