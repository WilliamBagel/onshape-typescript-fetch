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
import type { BTInstanceControlNode750 } from './BTInstanceControlNode750';
import {
    BTInstanceControlNode750FromJSON,
    BTInstanceControlNode750FromJSONTyped,
    BTInstanceControlNode750ToJSON,
} from './BTInstanceControlNode750';
import type { BTMAssemblyFeature887 } from './BTMAssemblyFeature887';
import {
    BTMAssemblyFeature887FromJSON,
    BTMAssemblyFeature887FromJSONTyped,
    BTMAssemblyFeature887ToJSON,
} from './BTMAssemblyFeature887';
import type { BTMAssemblyReplicateFeature1351 } from './BTMAssemblyReplicateFeature1351';
import {
    BTMAssemblyReplicateFeature1351FromJSON,
    BTMAssemblyReplicateFeature1351FromJSONTyped,
    BTMAssemblyReplicateFeature1351ToJSON,
} from './BTMAssemblyReplicateFeature1351';
import type { BTMSuppressionState1924 } from './BTMSuppressionState1924';
import {
    BTMSuppressionState1924FromJSON,
    BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
} from './BTMSuppressionState1924';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTParametricInstance2641 } from './BTParametricInstance2641';
import {
    BTParametricInstance2641FromJSON,
    BTParametricInstance2641FromJSONTyped,
    BTParametricInstance2641ToJSON,
} from './BTParametricInstance2641';
import type { BTReferenceCustomData1551 } from './BTReferenceCustomData1551';
import {
    BTReferenceCustomData1551FromJSON,
    BTReferenceCustomData1551FromJSONTyped,
    BTReferenceCustomData1551ToJSON,
} from './BTReferenceCustomData1551';
import type { BTRevisionCustomData2090 } from './BTRevisionCustomData2090';
import {
    BTRevisionCustomData2090FromJSON,
    BTRevisionCustomData2090FromJSONTyped,
    BTRevisionCustomData2090ToJSON,
} from './BTRevisionCustomData2090';

/**
 * 
 * @export
 * @interface BTAssemblyReplicate2774
 */
export interface BTAssemblyReplicate2774 extends BTParametricInstance2641 {
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyReplicate2774
     */
    btType?: string;
    /**
     * 
     * @type {BTMAssemblyReplicateFeature1351}
     * @memberof BTAssemblyReplicate2774
     */
    replicateFeature?: BTMAssemblyReplicateFeature1351;
}

/**
 * Check if a given object implements the BTAssemblyReplicate2774 interface.
 */
export function instanceOfBTAssemblyReplicate2774(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyReplicate2774FromJSON(json: any): BTAssemblyReplicate2774 {
    return BTAssemblyReplicate2774FromJSONTyped(json, false);
}

export function BTAssemblyReplicate2774FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyReplicate2774 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParametricInstance2641FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'replicateFeature': !exists(json, 'replicateFeature') ? undefined : BTMAssemblyReplicateFeature1351FromJSON(json['replicateFeature']),
    };
}

export function BTAssemblyReplicate2774ToJSON(value?: BTAssemblyReplicate2774 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParametricInstance2641ToJSON(value),
        'btType': value.btType,
        'replicateFeature': BTMAssemblyReplicateFeature1351ToJSON(value.replicateFeature),
    };
}
