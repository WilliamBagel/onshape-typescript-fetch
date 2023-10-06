/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.170.23367-59c3c9f9feef
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAssemblyPartInfo } from './BTAssemblyPartInfo';
import {
    BTAssemblyPartInfoFromJSON,
    BTAssemblyPartInfoFromJSONTyped,
    BTAssemblyPartInfoToJSON,
} from './BTAssemblyPartInfo';
import type { BTAssemblyPsFeatureInfo } from './BTAssemblyPsFeatureInfo';
import {
    BTAssemblyPsFeatureInfoFromJSON,
    BTAssemblyPsFeatureInfoFromJSONTyped,
    BTAssemblyPsFeatureInfoToJSON,
} from './BTAssemblyPsFeatureInfo';
import type { BTRootAssemblyInfo } from './BTRootAssemblyInfo';
import {
    BTRootAssemblyInfoFromJSON,
    BTRootAssemblyInfoFromJSONTyped,
    BTRootAssemblyInfoToJSON,
} from './BTRootAssemblyInfo';
import type { BTSubAssemblyInfo } from './BTSubAssemblyInfo';
import {
    BTSubAssemblyInfoFromJSON,
    BTSubAssemblyInfoFromJSONTyped,
    BTSubAssemblyInfoToJSON,
} from './BTSubAssemblyInfo';

/**
 * 
 * @export
 * @interface BTAssemblyDefinitionInfo
 */
export interface BTAssemblyDefinitionInfo {
    /**
     * 
     * @type {Array<BTAssemblyPsFeatureInfo>}
     * @memberof BTAssemblyDefinitionInfo
     */
    partStudioFeatures?: Array<BTAssemblyPsFeatureInfo>;
    /**
     * 
     * @type {Array<BTAssemblyPartInfo>}
     * @memberof BTAssemblyDefinitionInfo
     */
    parts?: Array<BTAssemblyPartInfo>;
    /**
     * 
     * @type {BTRootAssemblyInfo}
     * @memberof BTAssemblyDefinitionInfo
     */
    rootAssembly?: BTRootAssemblyInfo;
    /**
     * 
     * @type {Array<BTSubAssemblyInfo>}
     * @memberof BTAssemblyDefinitionInfo
     */
    subAssemblies?: Array<BTSubAssemblyInfo>;
}

/**
 * Check if a given object implements the BTAssemblyDefinitionInfo interface.
 */
export function instanceOfBTAssemblyDefinitionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyDefinitionInfoFromJSON(json: any): BTAssemblyDefinitionInfo {
    return BTAssemblyDefinitionInfoFromJSONTyped(json, false);
}

export function BTAssemblyDefinitionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyDefinitionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'partStudioFeatures': !exists(json, 'partStudioFeatures') ? undefined : ((json['partStudioFeatures'] as Array<any>).map(BTAssemblyPsFeatureInfoFromJSON)),
        'parts': !exists(json, 'parts') ? undefined : ((json['parts'] as Array<any>).map(BTAssemblyPartInfoFromJSON)),
        'rootAssembly': !exists(json, 'rootAssembly') ? undefined : BTRootAssemblyInfoFromJSON(json['rootAssembly']),
        'subAssemblies': !exists(json, 'subAssemblies') ? undefined : ((json['subAssemblies'] as Array<any>).map(BTSubAssemblyInfoFromJSON)),
    };
}

export function BTAssemblyDefinitionInfoToJSON(value?: BTAssemblyDefinitionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'partStudioFeatures': value.partStudioFeatures === undefined ? undefined : ((value.partStudioFeatures as Array<any>).map(BTAssemblyPsFeatureInfoToJSON)),
        'parts': value.parts === undefined ? undefined : ((value.parts as Array<any>).map(BTAssemblyPartInfoToJSON)),
        'rootAssembly': BTRootAssemblyInfoToJSON(value.rootAssembly),
        'subAssemblies': value.subAssemblies === undefined ? undefined : ((value.subAssemblies as Array<any>).map(BTSubAssemblyInfoToJSON)),
    };
}

