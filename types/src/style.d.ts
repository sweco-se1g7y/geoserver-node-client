/**
 * Client for GeoServer styles
 *
 * @module StyleClient
 */
export default class StyleClient {
    /**
     * Creates a GeoServer REST StyleClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Returns all default styles.
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with the default styles
     */
    getDefaults(): any;
    /**
     * Returns all styles in a workspace.
     *
     * @param {String} workspace Workspace name to get styles for
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with all styles
     */
    getInWorkspace(workspace: string): any;
    /**
     * Returns all styles defined in workspaces.
     *
     * @throws Error if request fails
     *
     * @returns {Object[]} An array with all style objects
     */
    getAllWorkspaceStyles(): any[];
    /**
     * Returns all styles as combined object (default ones and those in
     * workspaces).
     *
     * @returns {Object[]} An array with all style objects
     */
    getAll(): any[];
    /**
     * Publishes a new SLD style.
     *
     * @param {String} workspace The workspace to publish the style in
     * @param {String} name Name of the style
     * @param {String} sldBody SLD style (as XML text)
     *
     * @throws Error if request fails
     */
    publish(workspace: string, name: string, sldBody: string): Promise<void>;
    /**
     * Deletes a style.
     *
     * @param {String} workspace The name of the workspace, can be undefined if style is not assigned to a workspace
     * @param {String} name The name of the style to delete
     * @param {Boolean} [recurse=false] If references to the specified style in existing layers should be deleted
     * @param {Boolean} [purge=false] Whether the underlying file containing the style should be deleted on disk
     */
    delete(workspace: string, name: string, recurse?: boolean, purge?: boolean): Promise<void>;
    /**
     * Assigns a style to a layer.
     *
     * @param {String} workspaceOfLayer The name of the layer's workspace, can be undefined
     * @param {String} layerName The name of the layer to query
     * @param {String} workspaceOfStyle The workspace of the style, can be undefined
     * @param {String} styleName The name of the style
     * @param {Boolean} [isDefaultStyle=true] If the style should be the default style of the layer
     *
     * @throws Error if request fails
     */
    assignStyleToLayer(workspaceOfLayer: string, layerName: string, workspaceOfStyle: string, styleName: string, isDefaultStyle?: boolean): Promise<void>;
    /**
     * Get information about a style.
     *
     * @param {String} workspace The name of the workspace, can be undefined
     * @param {String} styleName The name of the style
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object about the style or undefined if it cannot be found
     */
    getStyleInformation(workspace: string, styleName: string): any;
}
//# sourceMappingURL=style.d.ts.map