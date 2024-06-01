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

import { BTWebhookOptions } from '../models/BTWebhookOptions';
import { HttpFile } from '../http/http';

export class BTWebhookParams {
    'clientId'?: string;
    /**
    * Company admins can register webhooks to listen to all company events.
    */
    'companyId'?: string;
    'data'?: string;
    'description'?: string;
    'documentId'?: string;
    'elementId'?: string;
    /**
    * List of events for which webhook callback is invoked.
    */
    'events'?: Array<string>;
    /**
    * Applications can pass this parameter as X-Session-ID with every REST call to distinguish webhooks triggered by self.
    */
    'externalSessionId'?: string;
    'filter'?: string;
    'folderId'?: string;
    'id'?: string;
    /**
    * Transient webhooks are automatically cleaned up after a period of inactivity.
    */
    'isTransient'?: boolean;
    'linkDocumentId'?: string;
    'options'?: BTWebhookOptions;
    'partId'?: string;
    'projectId'?: string;
    'url'?: string;
    'userId'?: string;
    'versionId'?: string;
    'workspaceId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentId",
            "baseName": "documentId",
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
            "name": "events",
            "baseName": "events",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "externalSessionId",
            "baseName": "externalSessionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string",
            "format": ""
        },
        {
            "name": "folderId",
            "baseName": "folderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isTransient",
            "baseName": "isTransient",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "linkDocumentId",
            "baseName": "linkDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "BTWebhookOptions",
            "format": ""
        },
        {
            "name": "partId",
            "baseName": "partId",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BTWebhookParams.attributeTypeMap;
    }

    public constructor() {
    }
}
