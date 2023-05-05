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
import type { BTKeyMouseValuesInfo } from './BTKeyMouseValuesInfo';
import {
    BTKeyMouseValuesInfoFromJSON,
    BTKeyMouseValuesInfoFromJSONTyped,
    BTKeyMouseValuesInfoToJSON,
} from './BTKeyMouseValuesInfo';

/**
 * 
 * @export
 * @interface BTViewManipulationMouseKeyMappingInfo
 */
export interface BTViewManipulationMouseKeyMappingInfo {
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    axisRotate3DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    pan2DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    pan3DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    rotate3DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    zoom2DMapping?: Array<BTKeyMouseValuesInfo>;
    /**
     * 
     * @type {Array<BTKeyMouseValuesInfo>}
     * @memberof BTViewManipulationMouseKeyMappingInfo
     */
    zoom3DMapping?: Array<BTKeyMouseValuesInfo>;
}

/**
 * Check if a given object implements the BTViewManipulationMouseKeyMappingInfo interface.
 */
export function instanceOfBTViewManipulationMouseKeyMappingInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTViewManipulationMouseKeyMappingInfoFromJSON(json: any): BTViewManipulationMouseKeyMappingInfo {
    return BTViewManipulationMouseKeyMappingInfoFromJSONTyped(json, false);
}

export function BTViewManipulationMouseKeyMappingInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTViewManipulationMouseKeyMappingInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'axisRotate3DMapping': !exists(json, 'axisRotate3DMapping') ? undefined : ((json['axisRotate3DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'pan2DMapping': !exists(json, 'pan2DMapping') ? undefined : ((json['pan2DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'pan3DMapping': !exists(json, 'pan3DMapping') ? undefined : ((json['pan3DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'rotate3DMapping': !exists(json, 'rotate3DMapping') ? undefined : ((json['rotate3DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'zoom2DMapping': !exists(json, 'zoom2DMapping') ? undefined : ((json['zoom2DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
        'zoom3DMapping': !exists(json, 'zoom3DMapping') ? undefined : ((json['zoom3DMapping'] as Array<any>).map(BTKeyMouseValuesInfoFromJSON)),
    };
}

export function BTViewManipulationMouseKeyMappingInfoToJSON(value?: BTViewManipulationMouseKeyMappingInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'axisRotate3DMapping': value.axisRotate3DMapping === undefined ? undefined : ((value.axisRotate3DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'pan2DMapping': value.pan2DMapping === undefined ? undefined : ((value.pan2DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'pan3DMapping': value.pan3DMapping === undefined ? undefined : ((value.pan3DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'rotate3DMapping': value.rotate3DMapping === undefined ? undefined : ((value.rotate3DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'zoom2DMapping': value.zoom2DMapping === undefined ? undefined : ((value.zoom2DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
        'zoom3DMapping': value.zoom3DMapping === undefined ? undefined : ((value.zoom3DMapping as Array<any>).map(BTKeyMouseValuesInfoToJSON)),
    };
}

