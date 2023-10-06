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


import * as runtime from '../runtime';
import type {
  BTBoundingBoxInfo,
} from '../models';
import {
    BTBoundingBoxInfoFromJSON,
    BTBoundingBoxInfoToJSON,
} from '../models';

export interface GetSketchBoundingBoxesRequest {
    did: string;
    wvm: string;
    wvmid: string;
    eid: string;
    sid: string;
    _configuration?: string;
    linkDocumentId?: string;
}

export interface GetSketchInfoRequest {
    did: string;
    wvm: string;
    wvmid: string;
    eid: string;
    _configuration?: string;
    sketchId?: Array<string>;
    output3D?: boolean;
    curvePoints?: boolean;
    includeGeometry?: boolean;
    linkDocumentId?: string;
}

export interface GetTessellatedEntitiesRequest {
    did: string;
    wvm: string;
    wvmid: string;
    eid: string;
    sid: string;
    _configuration?: string;
    entityId?: Array<string>;
    angleTolerance?: number;
    chordTolerance?: number;
    linkDocumentId?: string;
}

/**
 * 
 */
export class SketchApi extends runtime.BaseAPI {

    /**
     * Get all bounding boxes for a sketch.
     */
    async getSketchBoundingBoxesRaw(requestParameters: GetSketchBoundingBoxesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTBoundingBoxInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getSketchBoundingBoxes.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getSketchBoundingBoxes.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getSketchBoundingBoxes.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getSketchBoundingBoxes.');
        }

        if (requestParameters.sid === null || requestParameters.sid === undefined) {
            throw new runtime.RequiredError('sid','Required parameter requestParameters.sid was null or undefined when calling getSketchBoundingBoxes.');
        }

        const queryParameters: any = {};

        if (requestParameters._configuration !== undefined) {
            queryParameters['configuration'] = requestParameters._configuration;
        }

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/boundingboxes`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"sid"}}`, encodeURIComponent(String(requestParameters.sid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTBoundingBoxInfoFromJSON(jsonValue));
    }

    /**
     * Get all bounding boxes for a sketch.
     */
    async getSketchBoundingBoxes(requestParameters: GetSketchBoundingBoxesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTBoundingBoxInfo> {
        const response = await this.getSketchBoundingBoxesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information for all sketches in Part Studio.
     */
    async getSketchInfoRaw(requestParameters: GetSketchInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getSketchInfo.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getSketchInfo.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getSketchInfo.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getSketchInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters._configuration !== undefined) {
            queryParameters['configuration'] = requestParameters._configuration;
        }

        if (requestParameters.sketchId) {
            queryParameters['sketchId'] = requestParameters.sketchId;
        }

        if (requestParameters.output3D !== undefined) {
            queryParameters['output3D'] = requestParameters.output3D;
        }

        if (requestParameters.curvePoints !== undefined) {
            queryParameters['curvePoints'] = requestParameters.curvePoints;
        }

        if (requestParameters.includeGeometry !== undefined) {
            queryParameters['includeGeometry'] = requestParameters.includeGeometry;
        }

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get information for all sketches in Part Studio.
     */
    async getSketchInfo(requestParameters: GetSketchInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getSketchInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The accuracy of the tessellation to exact geometry is controlled by the `angleTolerance` and `chordTolerance` parameters. The tessellation points are computed closely enough so that neither the angle tolerance nor the chord tolerance are exceeded. For most parts, the angular tolerance is the most restrictive of the two default tolerances.
     * Get the tessellations of a sketch in a Part Studio.
     */
    async getTessellatedEntitiesRaw(requestParameters: GetTessellatedEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getTessellatedEntities.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getTessellatedEntities.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getTessellatedEntities.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getTessellatedEntities.');
        }

        if (requestParameters.sid === null || requestParameters.sid === undefined) {
            throw new runtime.RequiredError('sid','Required parameter requestParameters.sid was null or undefined when calling getTessellatedEntities.');
        }

        const queryParameters: any = {};

        if (requestParameters._configuration !== undefined) {
            queryParameters['configuration'] = requestParameters._configuration;
        }

        if (requestParameters.entityId) {
            queryParameters['entityId'] = requestParameters.entityId;
        }

        if (requestParameters.angleTolerance !== undefined) {
            queryParameters['angleTolerance'] = requestParameters.angleTolerance;
        }

        if (requestParameters.chordTolerance !== undefined) {
            queryParameters['chordTolerance'] = requestParameters.chordTolerance;
        }

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/partstudios/d/{did}/{wvm}/{wvmid}/e/{eid}/sketches/{sid}/tessellatedentities`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"sid"}}`, encodeURIComponent(String(requestParameters.sid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * The accuracy of the tessellation to exact geometry is controlled by the `angleTolerance` and `chordTolerance` parameters. The tessellation points are computed closely enough so that neither the angle tolerance nor the chord tolerance are exceeded. For most parts, the angular tolerance is the most restrictive of the two default tolerances.
     * Get the tessellations of a sketch in a Part Studio.
     */
    async getTessellatedEntities(requestParameters: GetTessellatedEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getTessellatedEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
