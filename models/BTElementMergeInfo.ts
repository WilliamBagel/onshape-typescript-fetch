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
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';
import type { GBTElementBranchStatus } from './GBTElementBranchStatus';
import {
    GBTElementBranchStatusFromJSON,
    GBTElementBranchStatusFromJSONTyped,
    GBTElementBranchStatusToJSON,
} from './GBTElementBranchStatus';
import type { GBTElementType } from './GBTElementType';
import {
    GBTElementTypeFromJSON,
    GBTElementTypeFromJSONTyped,
    GBTElementTypeToJSON,
} from './GBTElementType';

/**
 * 
 * @export
 * @interface BTElementMergeInfo
 */
export interface BTElementMergeInfo {
    /**
     * 
     * @type {string}
     * @memberof BTElementMergeInfo
     */
    branchPointElementName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTElementMergeInfo
     */
    branchPointElementPath?: Array<string>;
    /**
     * 
     * @type {BTElementMergeInfo}
     * @memberof BTElementMergeInfo
     */
    dependentElementMergeInfo?: BTElementMergeInfo;
    /**
     * 
     * @type {string}
     * @memberof BTElementMergeInfo
     */
    elementDataType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTElementMergeInfo
     */
    elementId?: string;
    /**
     * 
     * @type {GBTElementType}
     * @memberof BTElementMergeInfo
     */
    elementType?: GBTElementType;
    /**
     * 
     * @type {boolean}
     * @memberof BTElementMergeInfo
     */
    mergeable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTElementMergeInfo
     */
    sourceElementName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTElementMergeInfo
     */
    sourceElementPath?: Array<string>;
    /**
     * 
     * @type {GBTElementBranchStatus}
     * @memberof BTElementMergeInfo
     */
    sourceElementStatus?: GBTElementBranchStatus;
    /**
     * 
     * @type {Date}
     * @memberof BTElementMergeInfo
     */
    sourceModifiedAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTElementMergeInfo
     */
    sourceModifiedBy?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTElementMergeInfo
     */
    targetElementName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTElementMergeInfo
     */
    targetElementPath?: Array<string>;
    /**
     * 
     * @type {GBTElementBranchStatus}
     * @memberof BTElementMergeInfo
     */
    targetElementStatus?: GBTElementBranchStatus;
    /**
     * 
     * @type {Date}
     * @memberof BTElementMergeInfo
     */
    targetModifiedAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTElementMergeInfo
     */
    targetModifiedBy?: BTUserBasicSummaryInfo;
}

/**
 * Check if a given object implements the BTElementMergeInfo interface.
 */
export function instanceOfBTElementMergeInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTElementMergeInfoFromJSON(json: any): BTElementMergeInfo {
    return BTElementMergeInfoFromJSONTyped(json, false);
}

export function BTElementMergeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTElementMergeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branchPointElementName': !exists(json, 'branchPointElementName') ? undefined : json['branchPointElementName'],
        'branchPointElementPath': !exists(json, 'branchPointElementPath') ? undefined : json['branchPointElementPath'],
        'dependentElementMergeInfo': !exists(json, 'dependentElementMergeInfo') ? undefined : BTElementMergeInfoFromJSON(json['dependentElementMergeInfo']),
        'elementDataType': !exists(json, 'elementDataType') ? undefined : json['elementDataType'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementType': !exists(json, 'elementType') ? undefined : GBTElementTypeFromJSON(json['elementType']),
        'mergeable': !exists(json, 'mergeable') ? undefined : json['mergeable'],
        'sourceElementName': !exists(json, 'sourceElementName') ? undefined : json['sourceElementName'],
        'sourceElementPath': !exists(json, 'sourceElementPath') ? undefined : json['sourceElementPath'],
        'sourceElementStatus': !exists(json, 'sourceElementStatus') ? undefined : GBTElementBranchStatusFromJSON(json['sourceElementStatus']),
        'sourceModifiedAt': !exists(json, 'sourceModifiedAt') ? undefined : (new Date(json['sourceModifiedAt'])),
        'sourceModifiedBy': !exists(json, 'sourceModifiedBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['sourceModifiedBy']),
        'targetElementName': !exists(json, 'targetElementName') ? undefined : json['targetElementName'],
        'targetElementPath': !exists(json, 'targetElementPath') ? undefined : json['targetElementPath'],
        'targetElementStatus': !exists(json, 'targetElementStatus') ? undefined : GBTElementBranchStatusFromJSON(json['targetElementStatus']),
        'targetModifiedAt': !exists(json, 'targetModifiedAt') ? undefined : (new Date(json['targetModifiedAt'])),
        'targetModifiedBy': !exists(json, 'targetModifiedBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['targetModifiedBy']),
    };
}

export function BTElementMergeInfoToJSON(value?: BTElementMergeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branchPointElementName': value.branchPointElementName,
        'branchPointElementPath': value.branchPointElementPath,
        'dependentElementMergeInfo': BTElementMergeInfoToJSON(value.dependentElementMergeInfo),
        'elementDataType': value.elementDataType,
        'elementId': value.elementId,
        'elementType': GBTElementTypeToJSON(value.elementType),
        'mergeable': value.mergeable,
        'sourceElementName': value.sourceElementName,
        'sourceElementPath': value.sourceElementPath,
        'sourceElementStatus': GBTElementBranchStatusToJSON(value.sourceElementStatus),
        'sourceModifiedAt': value.sourceModifiedAt === undefined ? undefined : (value.sourceModifiedAt.toISOString()),
        'sourceModifiedBy': BTUserBasicSummaryInfoToJSON(value.sourceModifiedBy),
        'targetElementName': value.targetElementName,
        'targetElementPath': value.targetElementPath,
        'targetElementStatus': GBTElementBranchStatusToJSON(value.targetElementStatus),
        'targetModifiedAt': value.targetModifiedAt === undefined ? undefined : (value.targetModifiedAt.toISOString()),
        'targetModifiedBy': BTUserBasicSummaryInfoToJSON(value.targetModifiedBy),
    };
}

