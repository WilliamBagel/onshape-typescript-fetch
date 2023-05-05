/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.163.15457-d8ebaa9b9e42
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTComputedAssemblyPropertyAggregationOperator } from './BTComputedAssemblyPropertyAggregationOperator';
import {
    BTComputedAssemblyPropertyAggregationOperatorFromJSON,
    BTComputedAssemblyPropertyAggregationOperatorFromJSONTyped,
    BTComputedAssemblyPropertyAggregationOperatorToJSON,
} from './BTComputedAssemblyPropertyAggregationOperator';
import type { BTComputedAssemblyPropertyErrorPolicy } from './BTComputedAssemblyPropertyErrorPolicy';
import {
    BTComputedAssemblyPropertyErrorPolicyFromJSON,
    BTComputedAssemblyPropertyErrorPolicyFromJSONTyped,
    BTComputedAssemblyPropertyErrorPolicyToJSON,
} from './BTComputedAssemblyPropertyErrorPolicy';

/**
 * 
 * @export
 * @interface BTComputedAssemblyPropertyConfig
 */
export interface BTComputedAssemblyPropertyConfig {
    /**
     * 
     * @type {string}
     * @memberof BTComputedAssemblyPropertyConfig
     */
    aggregatedPropertyId?: string;
    /**
     * 
     * @type {BTComputedAssemblyPropertyAggregationOperator}
     * @memberof BTComputedAssemblyPropertyConfig
     */
    aggregationOperator?: BTComputedAssemblyPropertyAggregationOperator;
    /**
     * 
     * @type {BTComputedAssemblyPropertyErrorPolicy}
     * @memberof BTComputedAssemblyPropertyConfig
     */
    errorValuePolicy?: BTComputedAssemblyPropertyErrorPolicy;
    /**
     * 
     * @type {string}
     * @memberof BTComputedAssemblyPropertyConfig
     */
    filterPropertyId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTComputedAssemblyPropertyConfig
     */
    isFilterPropertyInverted?: boolean;
    /**
     * 
     * @type {BTComputedAssemblyPropertyErrorPolicy}
     * @memberof BTComputedAssemblyPropertyConfig
     */
    missingValuePolicy?: BTComputedAssemblyPropertyErrorPolicy;
    /**
     * 
     * @type {string}
     * @memberof BTComputedAssemblyPropertyConfig
     */
    secondaryPropertyId?: string;
}

/**
 * Check if a given object implements the BTComputedAssemblyPropertyConfig interface.
 */
export function instanceOfBTComputedAssemblyPropertyConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTComputedAssemblyPropertyConfigFromJSON(json: any): BTComputedAssemblyPropertyConfig {
    return BTComputedAssemblyPropertyConfigFromJSONTyped(json, false);
}

export function BTComputedAssemblyPropertyConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTComputedAssemblyPropertyConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregatedPropertyId': !exists(json, 'aggregatedPropertyId') ? undefined : json['aggregatedPropertyId'],
        'aggregationOperator': !exists(json, 'aggregationOperator') ? undefined : BTComputedAssemblyPropertyAggregationOperatorFromJSON(json['aggregationOperator']),
        'errorValuePolicy': !exists(json, 'errorValuePolicy') ? undefined : BTComputedAssemblyPropertyErrorPolicyFromJSON(json['errorValuePolicy']),
        'filterPropertyId': !exists(json, 'filterPropertyId') ? undefined : json['filterPropertyId'],
        'isFilterPropertyInverted': !exists(json, 'isFilterPropertyInverted') ? undefined : json['isFilterPropertyInverted'],
        'missingValuePolicy': !exists(json, 'missingValuePolicy') ? undefined : BTComputedAssemblyPropertyErrorPolicyFromJSON(json['missingValuePolicy']),
        'secondaryPropertyId': !exists(json, 'secondaryPropertyId') ? undefined : json['secondaryPropertyId'],
    };
}

export function BTComputedAssemblyPropertyConfigToJSON(value?: BTComputedAssemblyPropertyConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aggregatedPropertyId': value.aggregatedPropertyId,
        'aggregationOperator': BTComputedAssemblyPropertyAggregationOperatorToJSON(value.aggregationOperator),
        'errorValuePolicy': BTComputedAssemblyPropertyErrorPolicyToJSON(value.errorValuePolicy),
        'filterPropertyId': value.filterPropertyId,
        'isFilterPropertyInverted': value.isFilterPropertyInverted,
        'missingValuePolicy': BTComputedAssemblyPropertyErrorPolicyToJSON(value.missingValuePolicy),
        'secondaryPropertyId': value.secondaryPropertyId,
    };
}

