/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * OpenAPI spec version: 1.171.24804-920f3dc76f2b
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BTNameValuePair } from '../models/BTNameValuePair';
import { GBTAppElementAssociativeDataType } from '../models/GBTAppElementAssociativeDataType';
import { HttpFile } from '../http/http';

export class BTAssociativeDataInfo {
    'associativeDataId'?: string;
    'data'?: Array<BTNameValuePair>;
    'documentId'?: string;
    'documentMicroversion'?: string;
    'elementId'?: string;
    'error'?: string;
    'idTag'?: string;
    'microversionId'?: string;
    'occurrenceId'?: string;
    'type'?: GBTAppElementAssociativeDataType;
    'versionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associativeDataId",
            "baseName": "associativeDataId",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<BTNameValuePair>",
            "format": ""
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentMicroversion",
            "baseName": "documentMicroversion",
            "type": "string",
            "format": ""
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "idTag",
            "baseName": "idTag",
            "type": "string",
            "format": ""
        },
        {
            "name": "microversionId",
            "baseName": "microversionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "occurrenceId",
            "baseName": "occurrenceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GBTAppElementAssociativeDataType",
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTAssociativeDataInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


