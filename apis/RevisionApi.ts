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


import * as runtime from '../runtime';
import type {
  BTListResponseBTRevisionInfo,
  BTRevisionInfo,
  BTRevisionListResponse,
} from '../models';
import {
    BTListResponseBTRevisionInfoFromJSON,
    BTListResponseBTRevisionInfoToJSON,
    BTRevisionInfoFromJSON,
    BTRevisionInfoToJSON,
    BTRevisionListResponseFromJSON,
    BTRevisionListResponseToJSON,
} from '../models';

export interface DeleteRevisionHistoryRequest {
    cid: string;
    pnum: string;
    et: string;
    ignoreLinkedDocuments?: boolean;
}

export interface EnumerateRevisionsRequest {
    cid: string;
    elementType?: number;
    limit?: number;
    latestOnly?: boolean;
    after?: Date;
}

export interface GetAllInDocumentRequest {
    did: string;
}

export interface GetAllInDocumentVersionRequest {
    did: string;
    vid: string;
}

export interface GetLatestInDocumentOrCompanyRequest {
    cd: string;
    cdid: string;
    pnum: string;
    et: string;
}

export interface GetRevisionByPartNumberRequest {
    cid: string;
    pnum: string;
    revision?: string;
    elementType?: number;
}

export interface GetRevisionHistoryInCompanyByElementIdRequest {
    cid: string;
    did: string;
    wv: GetRevisionHistoryInCompanyByElementIdWvEnum;
    wvid: string;
    eid: string;
    elementType: string;
    linkDocumentId?: string;
    _configuration?: string;
    fillApprovers?: boolean;
    fillExportPermission?: boolean;
}

export interface GetRevisionHistoryInCompanyByPartIdRequest {
    cid: string;
    did: string;
    wv: string;
    wvid: string;
    eid: string;
    pid: string;
    _configuration?: string;
    linkDocumentId?: string;
    fillApprovers?: boolean;
    fillExportPermission?: boolean;
}

export interface GetRevisionHistoryInCompanyByPartNumberRequest {
    cid: string;
    pnum: string;
    elementType: string;
    fillApprovers?: boolean;
    fillExportPermission?: boolean;
}

/**
 * 
 */
export class RevisionApi extends runtime.BaseAPI {

    /**
     */
    async deleteRevisionHistoryRaw(requestParameters: DeleteRevisionHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling deleteRevisionHistory.');
        }

        if (requestParameters.pnum === null || requestParameters.pnum === undefined) {
            throw new runtime.RequiredError('pnum','Required parameter requestParameters.pnum was null or undefined when calling deleteRevisionHistory.');
        }

        if (requestParameters.et === null || requestParameters.et === undefined) {
            throw new runtime.RequiredError('et','Required parameter requestParameters.et was null or undefined when calling deleteRevisionHistory.');
        }

        const queryParameters: any = {};

        if (requestParameters.ignoreLinkedDocuments !== undefined) {
            queryParameters['ignoreLinkedDocuments'] = requestParameters.ignoreLinkedDocuments;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Delete"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/revisions/companies/{cid}/partnumber/{pnum}/elementType/{et}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))).replace(`{${"pnum"}}`, encodeURIComponent(String(requestParameters.pnum))).replace(`{${"et"}}`, encodeURIComponent(String(requestParameters.et))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async deleteRevisionHistory(requestParameters: DeleteRevisionHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteRevisionHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Enumerate all revisions in a company by creation time. Caller must be a company admin. Specify after and use the next URI to do complete enumeration.
     * Enumerate all revisions created in a company.
     */
    async enumerateRevisionsRaw(requestParameters: EnumerateRevisionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTRevisionInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling enumerateRevisions.');
        }

        const queryParameters: any = {};

        if (requestParameters.elementType !== undefined) {
            queryParameters['elementType'] = requestParameters.elementType;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.latestOnly !== undefined) {
            queryParameters['latestOnly'] = requestParameters.latestOnly;
        }

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = (requestParameters.after as any).toISOString();
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
            path: `/revisions/companies/{cid}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTRevisionInfoFromJSON(jsonValue));
    }

    /**
     * Enumerate all revisions in a company by creation time. Caller must be a company admin. Specify after and use the next URI to do complete enumeration.
     * Enumerate all revisions created in a company.
     */
    async enumerateRevisions(requestParameters: EnumerateRevisionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTRevisionInfo> {
        const response = await this.enumerateRevisionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.
     * Retrieve a list of all revisions that exist in a document.
     */
    async getAllInDocumentRaw(requestParameters: GetAllInDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTRevisionInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getAllInDocument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/revisions/d/{did}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTRevisionInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.
     * Retrieve a list of all revisions that exist in a document.
     */
    async getAllInDocument(requestParameters: GetAllInDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTRevisionInfo> {
        const response = await this.getAllInDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.
     * Retrieve a list of all revisions that exist in a document version.
     */
    async getAllInDocumentVersionRaw(requestParameters: GetAllInDocumentVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTRevisionInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getAllInDocumentVersion.');
        }

        if (requestParameters.vid === null || requestParameters.vid === undefined) {
            throw new runtime.RequiredError('vid','Required parameter requestParameters.vid was null or undefined when calling getAllInDocumentVersion.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/revisions/d/{did}/v/{vid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"vid"}}`, encodeURIComponent(String(requestParameters.vid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTRevisionInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.
     * Retrieve a list of all revisions that exist in a document version.
     */
    async getAllInDocumentVersion(requestParameters: GetAllInDocumentVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTRevisionInfo> {
        const response = await this.getAllInDocumentVersionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve latest revisions for a part number in a document or company by document ID, workspace or version or microversion ID, and tab ID.
     */
    async getLatestInDocumentOrCompanyRaw(requestParameters: GetLatestInDocumentOrCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTRevisionInfo>> {
        if (requestParameters.cd === null || requestParameters.cd === undefined) {
            throw new runtime.RequiredError('cd','Required parameter requestParameters.cd was null or undefined when calling getLatestInDocumentOrCompany.');
        }

        if (requestParameters.cdid === null || requestParameters.cdid === undefined) {
            throw new runtime.RequiredError('cdid','Required parameter requestParameters.cdid was null or undefined when calling getLatestInDocumentOrCompany.');
        }

        if (requestParameters.pnum === null || requestParameters.pnum === undefined) {
            throw new runtime.RequiredError('pnum','Required parameter requestParameters.pnum was null or undefined when calling getLatestInDocumentOrCompany.');
        }

        if (requestParameters.et === null || requestParameters.et === undefined) {
            throw new runtime.RequiredError('et','Required parameter requestParameters.et was null or undefined when calling getLatestInDocumentOrCompany.');
        }

        const queryParameters: any = {};

        if (requestParameters.et !== undefined) {
            queryParameters['et'] = requestParameters.et;
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
            path: `/revisions/{cd}/{cdid}/p/{pnum}/latest`.replace(`{${"cd"}}`, encodeURIComponent(String(requestParameters.cd))).replace(`{${"cdid"}}`, encodeURIComponent(String(requestParameters.cdid))).replace(`{${"pnum"}}`, encodeURIComponent(String(requestParameters.pnum))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTRevisionInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve latest revisions for a part number in a document or company by document ID, workspace or version or microversion ID, and tab ID.
     */
    async getLatestInDocumentOrCompany(requestParameters: GetLatestInDocumentOrCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTRevisionInfo> {
        const response = await this.getLatestInDocumentOrCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Navigation URL for part number and revision.
     * Get Navigation URL
     */
    async getRevisionByPartNumberRaw(requestParameters: GetRevisionByPartNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTRevisionInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getRevisionByPartNumber.');
        }

        if (requestParameters.pnum === null || requestParameters.pnum === undefined) {
            throw new runtime.RequiredError('pnum','Required parameter requestParameters.pnum was null or undefined when calling getRevisionByPartNumber.');
        }

        const queryParameters: any = {};

        if (requestParameters.revision !== undefined) {
            queryParameters['revision'] = requestParameters.revision;
        }

        if (requestParameters.elementType !== undefined) {
            queryParameters['elementType'] = requestParameters.elementType;
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
            path: `/revisions/c/{cid}/partnumber/{pnum}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))).replace(`{${"pnum"}}`, encodeURIComponent(String(requestParameters.pnum))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTRevisionInfoFromJSON(jsonValue));
    }

    /**
     * Get Navigation URL for part number and revision.
     * Get Navigation URL
     */
    async getRevisionByPartNumber(requestParameters: GetRevisionByPartNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTRevisionInfo> {
        const response = await this.getRevisionByPartNumberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, and tab ID.
     */
    async getRevisionHistoryInCompanyByElementIdRaw(requestParameters: GetRevisionHistoryInCompanyByElementIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTRevisionListResponse>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getRevisionHistoryInCompanyByElementId.');
        }

        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getRevisionHistoryInCompanyByElementId.');
        }

        if (requestParameters.wv === null || requestParameters.wv === undefined) {
            throw new runtime.RequiredError('wv','Required parameter requestParameters.wv was null or undefined when calling getRevisionHistoryInCompanyByElementId.');
        }

        if (requestParameters.wvid === null || requestParameters.wvid === undefined) {
            throw new runtime.RequiredError('wvid','Required parameter requestParameters.wvid was null or undefined when calling getRevisionHistoryInCompanyByElementId.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getRevisionHistoryInCompanyByElementId.');
        }

        if (requestParameters.elementType === null || requestParameters.elementType === undefined) {
            throw new runtime.RequiredError('elementType','Required parameter requestParameters.elementType was null or undefined when calling getRevisionHistoryInCompanyByElementId.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters._configuration !== undefined) {
            queryParameters['configuration'] = requestParameters._configuration;
        }

        if (requestParameters.elementType !== undefined) {
            queryParameters['elementType'] = requestParameters.elementType;
        }

        if (requestParameters.fillApprovers !== undefined) {
            queryParameters['fillApprovers'] = requestParameters.fillApprovers;
        }

        if (requestParameters.fillExportPermission !== undefined) {
            queryParameters['fillExportPermission'] = requestParameters.fillExportPermission;
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
            path: `/revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))).replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wv"}}`, encodeURIComponent(String(requestParameters.wv))).replace(`{${"wvid"}}`, encodeURIComponent(String(requestParameters.wvid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTRevisionListResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, and tab ID.
     */
    async getRevisionHistoryInCompanyByElementId(requestParameters: GetRevisionHistoryInCompanyByElementIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTRevisionListResponse> {
        const response = await this.getRevisionHistoryInCompanyByElementIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, tab ID, and part ID.
     */
    async getRevisionHistoryInCompanyByPartIdRaw(requestParameters: GetRevisionHistoryInCompanyByPartIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTRevisionListResponse>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getRevisionHistoryInCompanyByPartId.');
        }

        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getRevisionHistoryInCompanyByPartId.');
        }

        if (requestParameters.wv === null || requestParameters.wv === undefined) {
            throw new runtime.RequiredError('wv','Required parameter requestParameters.wv was null or undefined when calling getRevisionHistoryInCompanyByPartId.');
        }

        if (requestParameters.wvid === null || requestParameters.wvid === undefined) {
            throw new runtime.RequiredError('wvid','Required parameter requestParameters.wvid was null or undefined when calling getRevisionHistoryInCompanyByPartId.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getRevisionHistoryInCompanyByPartId.');
        }

        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling getRevisionHistoryInCompanyByPartId.');
        }

        const queryParameters: any = {};

        if (requestParameters._configuration !== undefined) {
            queryParameters['configuration'] = requestParameters._configuration;
        }

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters.fillApprovers !== undefined) {
            queryParameters['fillApprovers'] = requestParameters.fillApprovers;
        }

        if (requestParameters.fillExportPermission !== undefined) {
            queryParameters['fillExportPermission'] = requestParameters.fillExportPermission;
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
            path: `/revisions/companies/{cid}/d/{did}/{wv}/{wvid}/e/{eid}/p/{pid}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))).replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wv"}}`, encodeURIComponent(String(requestParameters.wv))).replace(`{${"wvid"}}`, encodeURIComponent(String(requestParameters.wvid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTRevisionListResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all revisions for a part in a company by company ID, document ID, workspace or version ID, tab ID, and part ID.
     */
    async getRevisionHistoryInCompanyByPartId(requestParameters: GetRevisionHistoryInCompanyByPartIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTRevisionListResponse> {
        const response = await this.getRevisionHistoryInCompanyByPartIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all revisions for a part number in a company by company ID.
     */
    async getRevisionHistoryInCompanyByPartNumberRaw(requestParameters: GetRevisionHistoryInCompanyByPartNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTRevisionListResponse>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getRevisionHistoryInCompanyByPartNumber.');
        }

        if (requestParameters.pnum === null || requestParameters.pnum === undefined) {
            throw new runtime.RequiredError('pnum','Required parameter requestParameters.pnum was null or undefined when calling getRevisionHistoryInCompanyByPartNumber.');
        }

        if (requestParameters.elementType === null || requestParameters.elementType === undefined) {
            throw new runtime.RequiredError('elementType','Required parameter requestParameters.elementType was null or undefined when calling getRevisionHistoryInCompanyByPartNumber.');
        }

        const queryParameters: any = {};

        if (requestParameters.elementType !== undefined) {
            queryParameters['elementType'] = requestParameters.elementType;
        }

        if (requestParameters.fillApprovers !== undefined) {
            queryParameters['fillApprovers'] = requestParameters.fillApprovers;
        }

        if (requestParameters.fillExportPermission !== undefined) {
            queryParameters['fillExportPermission'] = requestParameters.fillExportPermission;
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
            path: `/revisions/companies/{cid}/partnumber/{pnum}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))).replace(`{${"pnum"}}`, encodeURIComponent(String(requestParameters.pnum))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTRevisionListResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all revisions for a part number in a company by company ID.
     */
    async getRevisionHistoryInCompanyByPartNumber(requestParameters: GetRevisionHistoryInCompanyByPartNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTRevisionListResponse> {
        const response = await this.getRevisionHistoryInCompanyByPartNumberRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetRevisionHistoryInCompanyByElementIdWvEnum = {
    W: 'w',
    V: 'v'
} as const;
export type GetRevisionHistoryInCompanyByElementIdWvEnum = typeof GetRevisionHistoryInCompanyByElementIdWvEnum[keyof typeof GetRevisionHistoryInCompanyByElementIdWvEnum];
