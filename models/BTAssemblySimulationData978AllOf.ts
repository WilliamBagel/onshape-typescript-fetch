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
import type { BTAssemblySimulation2246 } from './BTAssemblySimulation2246';
import {
    BTAssemblySimulation2246FromJSON,
    BTAssemblySimulation2246FromJSONTyped,
    BTAssemblySimulation2246ToJSON,
} from './BTAssemblySimulation2246';
import type { BTMLoad3538 } from './BTMLoad3538';
import {
    BTMLoad3538FromJSON,
    BTMLoad3538FromJSONTyped,
    BTMLoad3538ToJSON,
} from './BTMLoad3538';

/**
 * 
 * @export
 * @interface BTAssemblySimulationData978AllOf
 */
export interface BTAssemblySimulationData978AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTAssemblySimulationData978AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblySimulationData978AllOf
     */
    contactBehavior?: BTAssemblySimulationData978AllOfContactBehaviorEnum;
    /**
     * 
     * @type {Array<BTMLoad3538>}
     * @memberof BTAssemblySimulationData978AllOf
     */
    loads?: Array<BTMLoad3538>;
    /**
     * 
     * @type {{ [key: string]: BTMLoad3538; }}
     * @memberof BTAssemblySimulationData978AllOf
     */
    loadsByNodeId?: { [key: string]: BTMLoad3538; };
    /**
     * 
     * @type {Array<BTAssemblySimulation2246>}
     * @memberof BTAssemblySimulationData978AllOf
     */
    simulations?: Array<BTAssemblySimulation2246>;
    /**
     * 
     * @type {Array<BTMLoad3538>}
     * @memberof BTAssemblySimulationData978AllOf
     */
    structuralLoads?: Array<BTMLoad3538>;
}


/**
 * @export
 */
export const BTAssemblySimulationData978AllOfContactBehaviorEnum = {
    MatesOnly: 'MATES_ONLY',
    FuseInContact: 'FUSE_IN_CONTACT',
    FuseInContactAndUseMates: 'FUSE_IN_CONTACT_AND_USE_MATES',
    Unknown: 'UNKNOWN'
} as const;
export type BTAssemblySimulationData978AllOfContactBehaviorEnum = typeof BTAssemblySimulationData978AllOfContactBehaviorEnum[keyof typeof BTAssemblySimulationData978AllOfContactBehaviorEnum];


/**
 * Check if a given object implements the BTAssemblySimulationData978AllOf interface.
 */
export function instanceOfBTAssemblySimulationData978AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblySimulationData978AllOfFromJSON(json: any): BTAssemblySimulationData978AllOf {
    return BTAssemblySimulationData978AllOfFromJSONTyped(json, false);
}

export function BTAssemblySimulationData978AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblySimulationData978AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'contactBehavior': !exists(json, 'contactBehavior') ? undefined : json['contactBehavior'],
        'loads': !exists(json, 'loads') ? undefined : ((json['loads'] as Array<any>).map(BTMLoad3538FromJSON)),
        'loadsByNodeId': !exists(json, 'loadsByNodeId') ? undefined : (mapValues(json['loadsByNodeId'], BTMLoad3538FromJSON)),
        'simulations': !exists(json, 'simulations') ? undefined : ((json['simulations'] as Array<any>).map(BTAssemblySimulation2246FromJSON)),
        'structuralLoads': !exists(json, 'structuralLoads') ? undefined : ((json['structuralLoads'] as Array<any>).map(BTMLoad3538FromJSON)),
    };
}

export function BTAssemblySimulationData978AllOfToJSON(value?: BTAssemblySimulationData978AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'contactBehavior': value.contactBehavior,
        'loads': value.loads === undefined ? undefined : ((value.loads as Array<any>).map(BTMLoad3538ToJSON)),
        'loadsByNodeId': value.loadsByNodeId === undefined ? undefined : (mapValues(value.loadsByNodeId, BTMLoad3538ToJSON)),
        'simulations': value.simulations === undefined ? undefined : ((value.simulations as Array<any>).map(BTAssemblySimulation2246ToJSON)),
        'structuralLoads': value.structuralLoads === undefined ? undefined : ((value.structuralLoads as Array<any>).map(BTMLoad3538ToJSON)),
    };
}
