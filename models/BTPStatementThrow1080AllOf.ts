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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';

/**
 * 
 * @export
 * @interface BTPStatementThrow1080AllOf
 */
export interface BTPStatementThrow1080AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementThrow1080AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementThrow1080AllOf
     */
    value?: BTPExpression9;
}

/**
 * Check if a given object implements the BTPStatementThrow1080AllOf interface.
 */
export function instanceOfBTPStatementThrow1080AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementThrow1080AllOfFromJSON(json: any): BTPStatementThrow1080AllOf {
    return BTPStatementThrow1080AllOfFromJSONTyped(json, false);
}

export function BTPStatementThrow1080AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementThrow1080AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'value': !exists(json, 'value') ? undefined : BTPExpression9FromJSON(json['value']),
    };
}

export function BTPStatementThrow1080AllOfToJSON(value?: BTPStatementThrow1080AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'value': BTPExpression9ToJSON(value.value),
    };
}

