/**
 * Client for GeoServer workspaces
 *
 * @module WorkspaceClient
 */
export default class WorkspaceClient {
    /**
     * Creates a GeoServer REST WorkspaceClient instance.
     *
     * WARNING: For most cases the 'NameSpaceClient' seems to fit better.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Returns all workspaces.
     *
     * @throws Error if request fails
     *
     * @returns {Object} An Object describing the workspaces
     */
    getAll(): any;
    /**
     * Returns a workspace.
     *
     * @param {String} name Name of the workspace
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object describing the workspaces
     */
    get(name: string): any;
    /**
     * Creates a new workspace.
     *
     * @param {String} name Name of the new workspace
     *
     * @throws Error if request fails
     *
     * @returns {String} The name of the created workspace
     */
    create(name: string): string;
    /**
     * Deletes a workspace.
     *
     * @param {String} name Name of the workspace to delete
     * @param {Boolean} recurse Flag to enable recursive deletion
     *
     * @throws Error if request fails
     */
    delete(name: string, recurse: boolean): Promise<void>;
}
//# sourceMappingURL=workspace.d.ts.map