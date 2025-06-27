/**
 * Client for GeoServer layergroups
 *
 * @module LayerGroupClient
 */
export default class LayerGroupClient {
    /**
     * Creates a GeoServer REST LayerGroupClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * @typedef {object} bounds
     * @property {number} minx The minimum x coordinates. Default: -180
     * @property {number} miny The minimum y coordinates. Default: -90
     * @property {number} maxx The maximum x coordinates. Default: 180
     * @property {number} maxy The maximum y coordinates. Default: 90
     * @property {String} crs The crs of the bounds. Default: 'EPSG:4326'
     */
    /**
     * Create a GeoServer layergroup by the given workspace, layerGroupName, layers and options
     * @param {String} workspace The name of the workspace
     * @param {String} layerGroupName The name of the layer group
     * @param {Array.<String>} layers List of layers to be added to the group. Must be in same workspace as layergroup
     * @param {String} options.mode The mode of the layergroup. Default to SINGLE
     * @param {String} options.layerGroupTitle The title of the layergroup.
     * @param {bounds} options.bounds The bounds of the layer group.
     *
     * @throws Error if request fails
     *
     * @returns {string} A string with layer group location or undefined if not found
     */
    create(workspace: string, layerGroupName: string, layers: Array<string>, layerGroupOptions: any): string;
    /**
     * Returns a GeoServer layergroup by the given workspace and layergroup name,
     * e.g. "myWs:myLayergroup".
     *
     * @param {String} workspace The name of the workspace
     * @param {String} layerGroupName The name of the layer group to query
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with layer group information or undefined if it cannot be found
     */
    get(workspace: string, layerGroupName: string): any;
    /**
     * Updates an existing GeoServer layergroup
     *
     * @param {String} workspace The name of the workspace
     * @param {String} layerName The name of the layergroup to update
     * @param {Object} layerGroupDefinition The updated definiton of the layergroup
     *
     * @throws Error if request fails
     */
    update(workspace: string, layerGroupName: any, layerGroupDefinition: any): Promise<void>;
}
//# sourceMappingURL=layergroup.d.ts.map