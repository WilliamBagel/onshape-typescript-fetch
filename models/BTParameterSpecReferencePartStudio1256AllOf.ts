/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.160.12410-b0c73c1032e8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTComputedConfigurationInputSpec2525 } from './BTComputedConfigurationInputSpec2525';
import {
    BTComputedConfigurationInputSpec2525FromJSON,
    BTComputedConfigurationInputSpec2525FromJSONTyped,
    BTComputedConfigurationInputSpec2525ToJSON,
} from './BTComputedConfigurationInputSpec2525';

/**
 * 
 * @export
 * @interface BTParameterSpecReferencePartStudio1256AllOf
 */
export interface BTParameterSpecReferencePartStudio1256AllOf {
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpecReferencePartStudio1256AllOf
     */
    allowedInsertableTypes?: Array<BTParameterSpecReferencePartStudio1256AllOfAllowedInsertableTypesEnum>;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecReferencePartStudio1256AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTComputedConfigurationInputSpec2525>}
     * @memberof BTParameterSpecReferencePartStudio1256AllOf
     */
    computedConfigurationInputs?: Array<BTComputedConfigurationInputSpec2525>;
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpecReferencePartStudio1256AllOf
     */
    maxNumberOfPicks?: number;
}


/**
 * @export
 */
export const BTParameterSpecReferencePartStudio1256AllOfAllowedInsertableTypesEnum = {
    Solid: 'SOLID',
    Surface: 'SURFACE',
    Wire: 'WIRE',
    Mesh: 'MESH',
    Sketch: 'SKETCH',
    FlattenedSheetMetal: 'FLATTENED_SHEET_METAL',
    EntirePartStudio: 'ENTIRE_PART_STUDIO',
    ConstructionPlane: 'CONSTRUCTION_PLANE',
    CompositePart: 'COMPOSITE_PART',
    Unknown: 'UNKNOWN'
} as const;
export type BTParameterSpecReferencePartStudio1256AllOfAllowedInsertableTypesEnum = typeof BTParameterSpecReferencePartStudio1256AllOfAllowedInsertableTypesEnum[keyof typeof BTParameterSpecReferencePartStudio1256AllOfAllowedInsertableTypesEnum];


/**
 * Check if a given object implements the BTParameterSpecReferencePartStudio1256AllOf interface.
 */
export function instanceOfBTParameterSpecReferencePartStudio1256AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReferencePartStudio1256AllOfFromJSON(json: any): BTParameterSpecReferencePartStudio1256AllOf {
    return BTParameterSpecReferencePartStudio1256AllOfFromJSONTyped(json, false);
}

export function BTParameterSpecReferencePartStudio1256AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReferencePartStudio1256AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowedInsertableTypes': !exists(json, 'allowedInsertableTypes') ? undefined : json['allowedInsertableTypes'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'computedConfigurationInputs': !exists(json, 'computedConfigurationInputs') ? undefined : ((json['computedConfigurationInputs'] as Array<any>).map(BTComputedConfigurationInputSpec2525FromJSON)),
        'maxNumberOfPicks': !exists(json, 'maxNumberOfPicks') ? undefined : json['maxNumberOfPicks'],
    };
}

export function BTParameterSpecReferencePartStudio1256AllOfToJSON(value?: BTParameterSpecReferencePartStudio1256AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowedInsertableTypes': value.allowedInsertableTypes,
        'btType': value.btType,
        'computedConfigurationInputs': value.computedConfigurationInputs === undefined ? undefined : ((value.computedConfigurationInputs as Array<any>).map(BTComputedConfigurationInputSpec2525ToJSON)),
        'maxNumberOfPicks': value.maxNumberOfPicks,
    };
}
