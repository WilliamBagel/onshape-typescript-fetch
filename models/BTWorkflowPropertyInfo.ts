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
import type { BTMetadataEnumValueInfo } from './BTMetadataEnumValueInfo';
import {
    BTMetadataEnumValueInfoFromJSON,
    BTMetadataEnumValueInfoFromJSONTyped,
    BTMetadataEnumValueInfoToJSON,
} from './BTMetadataEnumValueInfo';
import type { BTMetadataPropertyUiHintsInfo } from './BTMetadataPropertyUiHintsInfo';
import {
    BTMetadataPropertyUiHintsInfoFromJSON,
    BTMetadataPropertyUiHintsInfoFromJSONTyped,
    BTMetadataPropertyUiHintsInfoToJSON,
} from './BTMetadataPropertyUiHintsInfo';
import type { BTMetadataPropertyValidatorInfo } from './BTMetadataPropertyValidatorInfo';
import {
    BTMetadataPropertyValidatorInfoFromJSON,
    BTMetadataPropertyValidatorInfoFromJSONTyped,
    BTMetadataPropertyValidatorInfoToJSON,
} from './BTMetadataPropertyValidatorInfo';
import type { BTWorkflowableObjectObserver } from './BTWorkflowableObjectObserver';
import {
    BTWorkflowableObjectObserverFromJSON,
    BTWorkflowableObjectObserverFromJSONTyped,
    BTWorkflowableObjectObserverToJSON,
} from './BTWorkflowableObjectObserver';

/**
 * 
 * @export
 * @interface BTWorkflowPropertyInfo
 */
export interface BTWorkflowPropertyInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    computedAssemblyProperty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    computedProperty?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowPropertyInfo
     */
    computedPropertyError?: string;
    /**
     * 
     * @type {object}
     * @memberof BTWorkflowPropertyInfo
     */
    defaultValue?: object;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    dirty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    editable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    editableInUi?: boolean;
    /**
     * 
     * @type {Array<BTMetadataEnumValueInfo>}
     * @memberof BTWorkflowPropertyInfo
     */
    enumValues?: Array<BTMetadataEnumValueInfo>;
    /**
     * 
     * @type {object}
     * @memberof BTWorkflowPropertyInfo
     */
    initialValue?: object;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    isApproverProperty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    isNotifierProperty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    multivalued?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowPropertyInfo
     */
    name?: string;
    /**
     * 
     * @type {Array<BTWorkflowableObjectObserver>}
     * @memberof BTWorkflowPropertyInfo
     */
    observers?: Array<BTWorkflowableObjectObserver>;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowPropertyInfo
     */
    propertyId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTWorkflowPropertyInfo
     */
    propertySource?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowPropertyInfo
     */
    schemaId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    teamsOnly?: boolean;
    /**
     * 
     * @type {BTMetadataPropertyUiHintsInfo}
     * @memberof BTWorkflowPropertyInfo
     */
    uiHints?: BTMetadataPropertyUiHintsInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowPropertyInfo
     */
    usersOnly?: boolean;
    /**
     * 
     * @type {BTMetadataPropertyValidatorInfo}
     * @memberof BTWorkflowPropertyInfo
     */
    validator?: BTMetadataPropertyValidatorInfo;
    /**
     * 
     * @type {object}
     * @memberof BTWorkflowPropertyInfo
     */
    value?: object;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowPropertyInfo
     */
    valueType?: string;
}

/**
 * Check if a given object implements the BTWorkflowPropertyInfo interface.
 */
export function instanceOfBTWorkflowPropertyInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkflowPropertyInfoFromJSON(json: any): BTWorkflowPropertyInfo {
    return BTWorkflowPropertyInfoFromJSONTyped(json, false);
}

export function BTWorkflowPropertyInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkflowPropertyInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'computedAssemblyProperty': !exists(json, 'computedAssemblyProperty') ? undefined : json['computedAssemblyProperty'],
        'computedProperty': !exists(json, 'computedProperty') ? undefined : json['computedProperty'],
        'computedPropertyError': !exists(json, 'computedPropertyError') ? undefined : json['computedPropertyError'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'dirty': !exists(json, 'dirty') ? undefined : json['dirty'],
        'editable': !exists(json, 'editable') ? undefined : json['editable'],
        'editableInUi': !exists(json, 'editableInUi') ? undefined : json['editableInUi'],
        'enumValues': !exists(json, 'enumValues') ? undefined : ((json['enumValues'] as Array<any>).map(BTMetadataEnumValueInfoFromJSON)),
        'initialValue': !exists(json, 'initialValue') ? undefined : json['initialValue'],
        'isApproverProperty': !exists(json, 'isApproverProperty') ? undefined : json['isApproverProperty'],
        'isNotifierProperty': !exists(json, 'isNotifierProperty') ? undefined : json['isNotifierProperty'],
        'multivalued': !exists(json, 'multivalued') ? undefined : json['multivalued'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'observers': !exists(json, 'observers') ? undefined : ((json['observers'] as Array<any>).map(BTWorkflowableObjectObserverFromJSON)),
        'propertyId': !exists(json, 'propertyId') ? undefined : json['propertyId'],
        'propertySource': !exists(json, 'propertySource') ? undefined : json['propertySource'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'schemaId': !exists(json, 'schemaId') ? undefined : json['schemaId'],
        'teamsOnly': !exists(json, 'teamsOnly') ? undefined : json['teamsOnly'],
        'uiHints': !exists(json, 'uiHints') ? undefined : BTMetadataPropertyUiHintsInfoFromJSON(json['uiHints']),
        'usersOnly': !exists(json, 'usersOnly') ? undefined : json['usersOnly'],
        'validator': !exists(json, 'validator') ? undefined : BTMetadataPropertyValidatorInfoFromJSON(json['validator']),
        'value': !exists(json, 'value') ? undefined : json['value'],
        'valueType': !exists(json, 'valueType') ? undefined : json['valueType'],
    };
}

export function BTWorkflowPropertyInfoToJSON(value?: BTWorkflowPropertyInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'computedAssemblyProperty': value.computedAssemblyProperty,
        'computedProperty': value.computedProperty,
        'computedPropertyError': value.computedPropertyError,
        'defaultValue': value.defaultValue,
        'dirty': value.dirty,
        'editable': value.editable,
        'editableInUi': value.editableInUi,
        'enumValues': value.enumValues === undefined ? undefined : ((value.enumValues as Array<any>).map(BTMetadataEnumValueInfoToJSON)),
        'initialValue': value.initialValue,
        'isApproverProperty': value.isApproverProperty,
        'isNotifierProperty': value.isNotifierProperty,
        'multivalued': value.multivalued,
        'name': value.name,
        'observers': value.observers === undefined ? undefined : ((value.observers as Array<any>).map(BTWorkflowableObjectObserverToJSON)),
        'propertyId': value.propertyId,
        'propertySource': value.propertySource,
        'required': value.required,
        'schemaId': value.schemaId,
        'teamsOnly': value.teamsOnly,
        'uiHints': BTMetadataPropertyUiHintsInfoToJSON(value.uiHints),
        'usersOnly': value.usersOnly,
        'validator': BTMetadataPropertyValidatorInfoToJSON(value.validator),
        'value': value.value,
        'valueType': value.valueType,
    };
}
