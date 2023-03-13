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
/**
 * Variables in the VariableTable
 * @export
 * @interface BTVariableInfo
 */
export interface BTVariableInfo {
    /**
     * Variable description
     * @type {string}
     * @memberof BTVariableInfo
     */
    description?: string;
    /**
     * Variable expression
     * @type {string}
     * @memberof BTVariableInfo
     */
    expression: string;
    /**
     * Variable name
     * @type {string}
     * @memberof BTVariableInfo
     */
    name: string;
    /**
     * Variable type name, from FeatureScript VariableType
     * @type {string}
     * @memberof BTVariableInfo
     */
    type: BTVariableInfoTypeEnum;
    /**
     * Variable formatted value
     * @type {string}
     * @memberof BTVariableInfo
     */
    value: string;
}


/**
 * @export
 */
export const BTVariableInfoTypeEnum = {
    Length: 'LENGTH',
    Angle: 'ANGLE',
    Number: 'NUMBER',
    Any: 'ANY',
    Unknown: 'UNKNOWN'
} as const;
export type BTVariableInfoTypeEnum = typeof BTVariableInfoTypeEnum[keyof typeof BTVariableInfoTypeEnum];


/**
 * Check if a given object implements the BTVariableInfo interface.
 */
export function instanceOfBTVariableInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "expression" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function BTVariableInfoFromJSON(json: any): BTVariableInfo {
    return BTVariableInfoFromJSONTyped(json, false);
}

export function BTVariableInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTVariableInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'expression': json['expression'],
        'name': json['name'],
        'type': json['type'],
        'value': json['value'],
    };
}

export function BTVariableInfoToJSON(value?: BTVariableInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'expression': value.expression,
        'name': value.name,
        'type': value.type,
        'value': value.value,
    };
}
