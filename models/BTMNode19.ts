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
import {
     BTAssemblySimulationData978FromJSONTyped,
    BTAssemblySimulationData978ToJSON,
     BTInstanceBase2263FromJSONTyped,
    BTInstanceBase2263ToJSON,
     BTInstanceControlNode750FromJSONTyped,
    BTInstanceControlNode750ToJSON,
     BTMArrayParameterItem1843FromJSONTyped,
    BTMArrayParameterItem1843ToJSON,
     BTMConfigurationData1560FromJSONTyped,
    BTMConfigurationData1560ToJSON,
     BTMConfigurationParameter819FromJSONTyped,
    BTMConfigurationParameter819ToJSON,
     BTMConfiguredValue1341FromJSONTyped,
    BTMConfiguredValue1341ToJSON,
     BTMEnumOption592FromJSONTyped,
    BTMEnumOption592ToJSON,
     BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
     BTMFolder3208FromJSONTyped,
    BTMFolder3208ToJSON,
     BTMImport136FromJSONTyped,
    BTMImport136ToJSON,
     BTMIndividualQueryBase139FromJSONTyped,
    BTMIndividualQueryBase139ToJSON,
     BTMModel141FromJSONTyped,
    BTMModel141ToJSON,
     BTMNodeInvalid1772FromJSONTyped,
    BTMNodeInvalid1772ToJSON,
     BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
     BTMRecordMetrics1169FromJSONTyped,
    BTMRecordMetrics1169ToJSON,
     BTMRollback150FromJSONTyped,
    BTMRollback150ToJSON,
     BTMSketchEntity3FromJSONTyped,
    BTMSketchEntity3ToJSON,
     BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
     BTMUnitsDefault160FromJSONTyped,
    BTMUnitsDefault160ToJSON,
     BTMUserCode161FromJSONTyped,
    BTMUserCode161ToJSON,
     BTSimulationInstance3093FromJSONTyped,
    BTSimulationInstance3093ToJSON,
     BTToleranceString3274FromJSONTyped,
    BTToleranceString3274ToJSON
} from './';

/**
 * 
 * @export
 * @interface BTMNode19
 */
export interface BTMNode19 {
    /**
     * 
     * @type {string}
     * @memberof BTMNode19
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMNode19
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMNode19
     */
    nodeId?: string;
}

/**
 * Check if a given object implements the BTMNode19 interface.
 */
export function instanceOfBTMNode19(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMNode19FromJSON(json: any): BTMNode19 {
    return BTMNode19FromJSONTyped(json, false);
}

export function BTMNode19FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMNode19 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAssemblySimulationData-978') {
            return BTAssemblySimulationData978FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTInstanceBase-2263') {
            return BTInstanceBase2263FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTInstanceControlNode-750') {
            return BTInstanceControlNode750FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMArrayParameterItem-1843') {
            return BTMArrayParameterItem1843FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMConfigurationData-1560') {
            return BTMConfigurationData1560FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMConfigurationParameter-819') {
            return BTMConfigurationParameter819FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMConfiguredValue-1341') {
            return BTMConfiguredValue1341FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMEnumOption-592') {
            return BTMEnumOption592FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMFeature-134') {
            return BTMFeature134FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMFolder-3208') {
            return BTMFolder3208FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMImport-136') {
            return BTMImport136FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualQueryBase-139') {
            return BTMIndividualQueryBase139FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMModel-141') {
            return BTMModel141FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMNodeInvalid-1772') {
            return BTMNodeInvalid1772FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameter-1') {
            return BTMParameter1FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMRecordMetrics-1169') {
            return BTMRecordMetrics1169FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMRollback-150') {
            return BTMRollback150FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMSketchEntity-3') {
            return BTMSketchEntity3FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMSuppressionState-1924') {
            return BTMSuppressionState1924FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMUnitsDefault-160') {
            return BTMUnitsDefault160FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMUserCode-161') {
            return BTMUserCode161FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSimulationInstance-3093') {
            return BTSimulationInstance3093FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTToleranceString-3274') {
            return BTToleranceString3274FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
    };
}

export function BTMNode19SuperToJSON(value?: BTMNode19 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'importMicroversion': value.importMicroversion,
        'nodeId': value.nodeId,
    };
}



export function BTMNode19ToJSON(value?: BTMNode19 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (value.btType === 'BTAssemblySimulationData-978') {
        return BTAssemblySimulationData978ToJSON(value);
    }
    if (value.btType === 'BTInstanceBase-2263') {
        return BTInstanceBase2263ToJSON(value);
    }
    if (value.btType === 'BTInstanceControlNode-750') {
        return BTInstanceControlNode750ToJSON(value);
    }
    if (value.btType === 'BTMArrayParameterItem-1843') {
        return BTMArrayParameterItem1843ToJSON(value);
    }
    if (value.btType === 'BTMConfigurationData-1560') {
        return BTMConfigurationData1560ToJSON(value);
    }
    if (value.btType === 'BTMConfigurationParameter-819') {
        return BTMConfigurationParameter819ToJSON(value);
    }
    if (value.btType === 'BTMConfiguredValue-1341') {
        return BTMConfiguredValue1341ToJSON(value);
    }
    if (value.btType === 'BTMEnumOption-592') {
        return BTMEnumOption592ToJSON(value);
    }
    if (value.btType === 'BTMFeature-134') {
        return BTMFeature134ToJSON(value);
    }
    if (value.btType === 'BTMFolder-3208') {
        return BTMFolder3208ToJSON(value);
    }
    if (value.btType === 'BTMImport-136') {
        return BTMImport136ToJSON(value);
    }
    if (value.btType === 'BTMIndividualQueryBase-139') {
        return BTMIndividualQueryBase139ToJSON(value);
    }
    if (value.btType === 'BTMModel-141') {
        return BTMModel141ToJSON(value);
    }
    if (value.btType === 'BTMNodeInvalid-1772') {
        return BTMNodeInvalid1772ToJSON(value);
    }
    if (value.btType === 'BTMParameter-1') {
        return BTMParameter1ToJSON(value);
    }
    if (value.btType === 'BTMRecordMetrics-1169') {
        return BTMRecordMetrics1169ToJSON(value);
    }
    if (value.btType === 'BTMRollback-150') {
        return BTMRollback150ToJSON(value);
    }
    if (value.btType === 'BTMSketchEntity-3') {
        return BTMSketchEntity3ToJSON(value);
    }
    if (value.btType === 'BTMSuppressionState-1924') {
        return BTMSuppressionState1924ToJSON(value);
    }
    if (value.btType === 'BTMUnitsDefault-160') {
        return BTMUnitsDefault160ToJSON(value);
    }
    if (value.btType === 'BTMUserCode-161') {
        return BTMUserCode161ToJSON(value);
    }
    if (value.btType === 'BTSimulationInstance-3093') {
        return BTSimulationInstance3093ToJSON(value);
    }
    if (value.btType === 'BTToleranceString-3274') {
        return BTToleranceString3274ToJSON(value);
    }
    return BTMNode19SuperToJSON(value);
}
