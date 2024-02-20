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
/**
 * 
 * @export
 * @interface BTParameterGroupSpec3469
 */
export interface BTParameterGroupSpec3469 {
    /**
     * 
     * @type {number}
     * @memberof BTParameterGroupSpec3469
     */
    additionalLocalizedStrings?: number;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTParameterGroupSpec3469
     */
    collapsedByDefault?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    drivingParameterId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    groupId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    groupName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterGroupSpec3469
     */
    groupOrParameterIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    localizableName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    localizedName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterGroupSpec3469
     */
    stringsToLocalize?: Array<string>;
}

/**
 * Check if a given object implements the BTParameterGroupSpec3469 interface.
 */
export function instanceOfBTParameterGroupSpec3469(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterGroupSpec3469FromJSON(json: any): BTParameterGroupSpec3469 {
    return BTParameterGroupSpec3469FromJSONTyped(json, false);
}

export function BTParameterGroupSpec3469FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterGroupSpec3469 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalLocalizedStrings': !exists(json, 'additionalLocalizedStrings') ? undefined : json['additionalLocalizedStrings'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'collapsedByDefault': !exists(json, 'collapsedByDefault') ? undefined : json['collapsedByDefault'],
        'drivingParameterId': !exists(json, 'drivingParameterId') ? undefined : json['drivingParameterId'],
        'groupId': !exists(json, 'groupId') ? undefined : json['groupId'],
        'groupName': !exists(json, 'groupName') ? undefined : json['groupName'],
        'groupOrParameterIds': !exists(json, 'groupOrParameterIds') ? undefined : json['groupOrParameterIds'],
        'localizableName': !exists(json, 'localizableName') ? undefined : json['localizableName'],
        'localizedName': !exists(json, 'localizedName') ? undefined : json['localizedName'],
        'stringsToLocalize': !exists(json, 'stringsToLocalize') ? undefined : json['stringsToLocalize'],
    };
}

export function BTParameterGroupSpec3469ToJSON(value?: BTParameterGroupSpec3469 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalLocalizedStrings': value.additionalLocalizedStrings,
        'btType': value.btType,
        'collapsedByDefault': value.collapsedByDefault,
        'drivingParameterId': value.drivingParameterId,
        'groupId': value.groupId,
        'groupName': value.groupName,
        'groupOrParameterIds': value.groupOrParameterIds,
        'localizableName': value.localizableName,
        'localizedName': value.localizedName,
        'stringsToLocalize': value.stringsToLocalize,
    };
}

