/**
 * Client for GeoServer layers
 *
 * @module LayerClient
 */
export default class LayerClient {
    /**
     * Creates a GeoServer REST LayerClient instance.
     *
     * @param {String} url The URL of the GeoServer REST API endpoint
     * @param {String} auth The Basic Authentication string
     */
    constructor(url: string, auth: string);
    url: string;
    auth: string;
    /**
     * Returns a GeoServer layer by the given workspace and layer name,
     * e.g. "myWs:myLayer".
     *
     * @param {String} workspace The name of the workspace, can be undefined
     * @param {String} layerName The name of the layer to query
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with layer information or undefined if it cannot be found
     */
    get(workspace: string, layerName: string): any;
    /**
     * Sets the attribution text and link of a layer.
     *
     * @param {String} workspace The name of the workspace, can be undefined
     * @param {String} layerName The name of the layer to query
     * @param {String} [attributionText] The attribution text
     * @param {String} [attributionLink] The attribution link
     *
     * @throws Error if request fails
     */
    modifyAttribution(workspace: string, layerName: string, attributionText?: string, attributionLink?: string): Promise<void>;
    /**
     * Returns all layers in the GeoServer.
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with all layer information
     */
    getAll(): any;
    /**
     * Get all layers of a workspace.
     *
     * @param {String} workspace The workspace
     *
     * @throws Error if request fails
     *
     * @return {Object} An object with the information about the layers
     */
    getLayers(workspace: string): any;
    /**
     * Returns information about a cascaded WMS layer.
     *
     * @param {String} workspace The workspace
     * @param {String} datastore The datastore
     * @param {String} layerName The WMS layer name
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with layer information or undefined if it cannot be found
     */
    getWmsLayer(workspace: string, datastore: string, layerName: string): any;
    /**
     * Returns information about a cascaded WMTS layer.
     *
     * @param {String} workspace The workspace
     * @param {String} datastore The datastore
     * @param {String} layerName The WMTS layer name
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with layer information or undefined if it cannot be found
     */
    getWmtsLayer(workspace: string, datastore: string, layerName: string): any;
    /**
     * Publishes a FeatureType in the default data store of the workspace.
     *
     * @param {String} workspace Workspace to publish FeatureType in
     * @param {String} [nativeName] Native name of FeatureType
     * @param {String} name Published name of FeatureType
     * @param {String} [title] Published title of FeatureType
     * @param {String} [srs="EPSG:4326"] The SRS of the FeatureType
     * @param {String} enabled Flag to enable FeatureType by default
     * @param {String} [abstract] The abstract of the layer
     *
     * @throws Error if request fails
     */
    publishFeatureTypeDefaultDataStore(workspace: string, nativeName?: string, name: string, title?: string, srs?: string, enabled: string, abstract?: string): Promise<void>;
    /**
     * Publishes a FeatureType in the given data store of the workspace.
     *
     * @param {String} workspace Workspace to publish FeatureType in
     * @param {String} dataStore The datastore where the FeatureType's data is in
     * @param {String} [nativeName] Native name of FeatureType
     * @param {String} name Published name of FeatureType
     * @param {String} [title] Published title of FeatureType
     * @param {String} [srs="EPSG:4326"] The SRS of the FeatureType
     * @param {String} enabled Flag to enable FeatureType by default
     * @param {String} [abstract] The abstract of the layer
     * @param {String} [nativeBoundingBox] The native BoundingBox of the FeatureType (has to be set if no data is in store at creation time)
     *
     * @throws Error if request fails
     */
    publishFeatureType(workspace: string, dataStore: string, nativeName?: string, name: string, title?: string, srs?: string, enabled: string, abstract?: string, nativeBoundingBox?: string): Promise<void>;
    /**
     * Get detailed information about a FeatureType.
     *
     * @param {String} workspace The workspace of the FeatureType
     * @param {String} datastore The datastore of the FeatureType
     * @param {String} name The name of the FeatureType
     *
     * @throws Error if request fails
     *
     * @returns {Object} The object of the FeatureType
     */
    getFeatureType(workspace: string, datastore: string, name: string): any;
    /**
     * Get detailed information about a FeatureType.
     *
     * @param {String} workspace The workspace of the FeatureType
     * @param {String} name The name of the FeatureType
     *
     * @throws GeoServerResponseError if request fails or layer does not exist or lacks the right properties.
     *
     * @returns {Object} The object of the FeatureType
     */
    getFeatureTypeFromLayer(workspace: string, layer: any): any;
    /**
     *  Publishes a WMS layer.
     *
     * @param {String} workspace Workspace to publish WMS layer in
     * @param {String} dataStore The datastore where the WMS is connected
     * @param {String} nativeName Native name of WMS layer
     * @param {String} [name] Published name of WMS layer
     * @param {String} [title] Published title of WMS layer
     * @param {String} [srs="EPSG:4326"] The SRS of the WMS layer
     * @param {String} enabled Flag to enable WMS layer by default
     * @param {String} [abstract] The abstract of the layer
     *
     * @throws Error if request fails
     */
    publishWmsLayer(workspace: string, dataStore: string, nativeName: string, name?: string, title?: string, srs?: string, enabled: string, abstract?: string): Promise<void>;
    /**
     * Publishes a raster stored in a database.
     *
     * @param {String} workspace Workspace to publish layer in
     * @param {String} coverageStore The coveragestore where the layer's data is in
     * @param {String} nativeName Native name of raster
     * @param {String} name Published name of layer
     * @param {String} [title] Published title of layer
     * @param {String} [srs="EPSG:4326"] The SRS of the layer
     * @param {String} enabled Flag to enable layer by default
     * @param {String} [abstract] The abstract of the layer
     *
     * @throws Error if request fails
     */
    publishDbRaster(workspace: string, coverageStore: string, nativeName: string, name: string, title?: string, srs?: string, enabled: string, abstract?: string): Promise<void>;
    /**
     * Deletes a FeatureType.
     *
     * @param {String} workspace Workspace where layer to delete is in
     * @param {String} datastore The datastore where the layer to delete is in
     * @param {String} name Layer to delete
     * @param {Boolean} recurse Flag to enable recursive deletion
     *
     * @throws Error if request fails
     */
    deleteFeatureType(workspace: string, datastore: string, name: string, recurse: boolean): Promise<void>;
    /**
     * Enables TIME dimension for the given coverage layer.
     *
     * @param {String} workspace Workspace where layer to enable time dimension for is in
     * @param {String} datastore The datastore where the layer to enable time dimension for is in
     * @param {String} name Layer to enable time dimension for
     * @param {String} presentation Presentation type: 'LIST' or 'DISCRETE_INTERVAL' or 'CONTINUOUS_INTERVAL'
     * @param {Number} resolution Resolution in milliseconds, e.g. 3600000 for 1 hour
     * @param {String} defaultValue The default time value, e.g. 'MINIMUM' or 'MAXIMUM' or 'NEAREST' or 'FIXED'
     * @param {Boolean} [nearestMatchEnabled] Enable nearest match
     * @param {Boolean} [rawNearestMatchEnabled] Enable raw nearest match
     * @param {String} [acceptableInterval] Acceptable interval for nearest match, e.g.'PT30M'
     *
     * @throws Error if request fails
     */
    enableTimeCoverage(workspace: string, dataStore: any, name: string, presentation: string, resolution: number, defaultValue: string, nearestMatchEnabled?: boolean, rawNearestMatchEnabled?: boolean, acceptableInterval?: string): Promise<void>;
    /**
     * Enables TIME dimension for the given FeatureType layer.
     *
     * @param {String} workspace Workspace containing layer to enable time dimension for
     * @param {String} datastore The datastore containing the FeatureType to enable time dimension for
     * @param {String} name FeatureType to enable time dimension for
     * @param {String} attribute Data column / attribute holding the time values
     * @param {String} presentation Presentation type: 'LIST' or 'DISCRETE_INTERVAL' or 'CONTINUOUS_INTERVAL'
     * @param {Number} resolution Resolution in milliseconds, e.g. 3600000 for 1 hour
     * @param {String} defaultValue The default time value, e.g. 'MINIMUM' or 'MAXIMUM' or 'NEAREST' or 'FIXED'
     * @param {Boolean} [nearestMatchEnabled] Enable nearest match
     * @param {Boolean} [rawNearestMatchEnabled] Enable raw nearest match
     *
     * @throws Error if request fails
     */
    enableTimeFeatureType(workspace: string, dataStore: any, name: string, attribute: string, presentation: string, resolution: number, defaultValue: string, nearestMatchEnabled?: boolean, rawNearestMatchEnabled?: boolean, acceptableInterval: any): Promise<void>;
    /**
     * Returns a dedicated coverage object.
     *
     * @param {String} workspace Workspace containing the coverage
     * @param {String} coverageStore The coveragestore containing the coverage
     * @param {String} name Coverage to query
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with coverage information or undefined if it cannot be found
     */
    getCoverage(workspace: string, coverageStore: string, name: string): any;
    /**
     * Returns a dedicated coverage object.
     *
     * @param {String} workspace Workspace containing the coverage
     * @param {String} name Coverage to query
     *
     * @throws Error if request fails
     *
     * @returns {Object} An object with coverage information or undefined if it cannot be found
     */
    getCoverageFromLayer(workspace: string, name: string): any;
    /**
     * Renames the existing bands of a coverage layer.
     *
     * Make sure to provide the same number of bands as existing in the layer.
     *
     * @param {String} workspace Workspace of layer
     * @param {String} datastore The datastore of the layer
     * @param {String} layername The layer name
     * @param {String[]} bandNames An array of the new band names in correct order
     *
     * @throws Error if request fails
     */
    renameCoverageBands(workspace: string, dataStore: any, layername: string, bandNames: string[]): Promise<void>;
    /**
     * Returns the data store of a layer.
     *
     * @param {String} workspace The workspace of the layer
     * @param {String} layer The name of the layer
     *
     * @throws GeoServerResponseError if request fails or layer does not exist or lacks a data store.
     *
     * @returns {Object} The data store object
     */
    getDataStore(workspace: string, layer: string): any;
    /**
     * Returns the coverage store of a layer.
     *
     * @param {String} workspace The workspace of the layer
     * @param {String} layer The name of the layer
     *
     * @throws GeoServerResponseError if request fails or layer does not exist or lacks a coverage store.
     *
     * @returns {Object} The coverage store object
     */
    getCoverageStore(workspace: string, layer: string): any;
}
//# sourceMappingURL=layer.d.ts.map